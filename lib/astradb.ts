import { DataAPIClient, VectorDoc, UUID } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { OpenAIEmbeddings } from "@langchain/openai";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";
const openaiApi = process.env.OPENAI_API_KEY || "";
const googleapi = process.env.GOOGLE_API_KEY || "";

if(!token || !endpoint || !collection){
    throw new Error(
        "Please set the ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTRA_DB_COLLECTION"
    )
}

export async function getVectorStore(){
    return AstraDBVectorStore.fromExistingIndex(
        new GoogleGenerativeAIEmbeddings({
            modelName: "text-embedding-004",
            apiKey: googleapi,
        }),
        // new OpenAIEmbeddings({
        //     modelName: "text-embedding-3-small",
        //     apiKey: openaiApi,
        // }),
        {
            token,
            endpoint,
            collection,
            collectionOptions:{
                vector:{
                    dimension: 768,
                    metric: "cosine"
                }
            }

        }
    )
}


export async function getEmbeddingsCollection(){
    const client = new DataAPIClient(token);
    const db = client.db(endpoint);

    return db.collection(collection);
}