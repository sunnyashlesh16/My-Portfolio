//Using Gen Ai of Open Ai
// import { OpenAIStream } from "ai";
// import OpenAI from "openai";
// import { ChatCompletionMessageParam } from "ai/prompts";
// const genAI = new GoogleGenerativeAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const body = await req.json();
// const messages = body.messages;
// const systemMessage: ChatCompletionMessageParam = {
        //     role: "system",
        //     content: "You are a sarcasm bot. You answer all user questions in a sarcastic way."
        // }

        // const response = await openai.chat.completions.create({
        //     model: "gemini-1.5-flash",
        //     stream: true,
        //     messages: [systemMessage, ...messages]
        // })

// const stream = OpenAIStream(response)

//Using Generative Ai Of Google Gemini
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { GoogleGenerativeAIStream, Message, StreamingTextResponse, LangChainStream } from 'ai';

// export async function POST(req: Request){
//     try{
//         const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

//         const { messages } = await req.json();
       
//         const buildGoogleGenAIPrompt = (messages: Message[]) => ({
//             contents: messages
//                 .filter(message => message.role === 'user' || message.role === 'assistant')
//                 .map(message => ({
//                 role: message.role === 'user' ? 'user' : 'model',
//                 parts: [{ text: message.content }],
//             })),
//         });

//         const geminiStream = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }).generateContentStream(buildGoogleGenAIPrompt(messages))

//         const stream = GoogleGenerativeAIStream(geminiStream)
//         return new StreamingTextResponse(stream);

//     } catch (error){
//         console.error(error);
//         return Response.json({error: "Internal server error"}, {status: 500})
//     }
// }

// Using Lanchain with Gemini Ai

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message as VercelChatMessage, StreamingTextResponse, LangChainStream } from 'ai';
import { ChatPromptTemplate, PromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents"
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { AIMessage, HumanMessage} from "@langchain/core/messages";
import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { Redis } from "@upstash/redis";

export async function POST(req: Request){
    try{
       
        const { messages } = await req.json();

        const chatHistory = messages.slice(0, -1).map((m: VercelChatMessage) =>
                            m.role === "user" ? new HumanMessage(m.content) :
                            new AIMessage(m.content));
        
        const currentMessage = messages[messages.length-1].content;

        const cache = new UpstashRedisCache({
            client: Redis.fromEnv(),

        })

        const { stream, handlers} = LangChainStream();

        const llmModel = new ChatGoogleGenerativeAI({
            apiKey: process.env.GOOGLE_API_KEY,
            model: "gemini-1.5-flash",
            streaming: true,
            callbacks:[handlers],
            verbose: true,
            cache,
        });

        const rephraseModel = new ChatGoogleGenerativeAI({
            apiKey: process.env.GOOGLE_API_KEY,
            model: "gemini-1.5-flash",
            verbose: true,
            cache,
        });

        const rephrasePrompt = ChatPromptTemplate.fromMessages(
            [
                new MessagesPlaceholder("chat_history"),
                [
                    "user","{input}"
                ],
                [
                    "user",
                    "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
                    "Don't leave out an relevant keywords. Only return the query and no other text."
                ]
            ]
        )
        const retriever = (await getVectorStore()).asRetriever();

        const historyAwareChain = await createHistoryAwareRetriever({
            llm: llmModel,
            retriever,
            rephrasePrompt,    
        });

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                "You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
                "Answer the user's questions based on the below context. " +
                "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
                "Format your message in markdown format.\n\n" +
                "Context:\n{context}"
                ,     
            ],
            new MessagesPlaceholder("chat_history"),
            [
                "user","{input}"
            ],
        ])

        const combineDocsChain = await createStuffDocumentsChain({
            llm: llmModel,
            prompt,
            documentPrompt: PromptTemplate.fromTemplate(
                "Page_URL: {url}\n\nPage content:\n{page_content}"
            ),
            documentSeparator: "\n---------\n"
        })

        const retrieveChain = await createRetrievalChain({
            combineDocsChain,
            retriever ,
        });
        
        retrieveChain.invoke({
            input: currentMessage,
            chat_history: chatHistory,
        });

        return new StreamingTextResponse(stream);
       
    } catch (error){
        console.error(error);
        return Response.json({error: "Internal server error"}, {status: 500})
    }
}