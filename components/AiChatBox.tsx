import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import {
  Bot,
  SendHorizonal,
  TrashIcon,
  UserRound,
  XCircle,
} from "lucide-react";
import { Island_Moments } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if(scrollRef.current){
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
     }
  }, [messages])

  useEffect(() => {
    if(open){
        inputRef.current?.focus();
    }
  })

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} className="rounded-full bg-accent-hover" />
      </button>
      <div className="flex h-[600px] flex-col rounded bg-emerald-600">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "Something went wrong. Please try again!",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot size={28} />
              <p>
                Hi, Feel free to ask anything you'd like to know about SUNNY. I'll do my best to provide accurate answers.
              </p>
              <p className="text-sm text-white/40">
                PS: If you want to learn how to build your own AI chatbot, check
                out my{" "}
                <a className="text-sky-500 hover:underline" href="github.com">
                  GitHub Link
                </a>
                for sourcecode.
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <button
            type="button"
            className="flex w-10 flex-none items-center justify-center"
            title="Clear Chat"
            onClick={() => setMessages([])}
          >
            <TrashIcon size={24} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Something!"
            className="grow rounded border bg-white px-3 py-2 text-black"
            ref={inputRef}
          />
          <button type="submit" title="Submit Message" className="flex w-10 flex-none items-center justify-center disabled:opacity-50"
           disabled={input.length === 0}>
            <SendHorizonal size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage ? (
        <Bot className="mr-2 flex-none text-black" />
      ) : (
        <UserRound className="mr-2 flex-none text-white" />
      )}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-black" : "bg-white text-black",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-sky-500 hover:underline"
              ></Link>
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="first-0 mt-3"></p>
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="first-mt-0 mt-3 list-inside list-disc"
              ></ul>
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1"></li>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
