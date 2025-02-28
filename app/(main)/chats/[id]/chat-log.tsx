"use client";

import type { Chat, Message } from "./page";
import ArrowLeftIcon from "@/components/icons/arrow-left";
import { splitByFirstCodeFence } from "@/lib/utils";
import Markdown from "react-markdown";
import { StickToBottom } from "use-stick-to-bottom";

export default function ChatLog({
  chat,
  activeMessage,
  streamText,
  onMessageClick,
}: {
  chat: Chat;
  activeMessage?: Message;
  streamText: string;
  onMessageClick: (v: Message) => void;
}) {
  const assistantMessages = chat.messages.filter((m) => m.role === "assistant");

  return (
    <StickToBottom
      className="relative grow overflow-hidden"
      resize="smooth"
      initial="smooth"
    >
      <StickToBottom.Content className="mx-auto flex w-full max-w-prose flex-col gap-8 p-8">
        <UserMessage content={chat.prompt} />

        {chat.messages.slice(2).map((message) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <UserMessage content={message.content} />
            ) : (
              <AssistantMessage
                content={message.content}
                version={
                  assistantMessages.map((m) => m.id).indexOf(message.id) + 1
                }
                message={message}
                isActive={!streamText && activeMessage?.id === message.id}
                onMessageClick={onMessageClick}
              />
            )}
          </div>
        ))}

        {streamText && (
          <AssistantMessage
            content={streamText}
            version={assistantMessages.length + 1}
            isActive={true}
          />
        )}
      </StickToBottom.Content>
    </StickToBottom>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="size-4 rotate-45 rounded-sm bg-gray-700" />
      <div className="italic text-gray-600">{content}</div>
    </div>
  );
}

function AssistantMessage({
  content,
  version,
  message,
  isActive,
  onMessageClick = () => {},
}: {
  content: string;
  version: number;
  message?: Message;
  isActive?: boolean;
  onMessageClick?: (v: Message) => void;
}) {
  const parts = splitByFirstCodeFence(content);

  return (
    <div>
      {parts.map((part, i) => (
        <div key={i}>
          {part.type === "text" ? (
            <Markdown className="prose">{part.content}</Markdown>
          ) : part.type === "first-code-fence-generating" ? (
            <div className="my-4">
              <button
                disabled
                className="inline-flex w-full animate-pulse items-center gap-2 rounded-lg border-4 border-gray-300 p-1.5"
              >
                <div className="flex size-8 items-center justify-center rounded bg-gray-300 font-bold">
                  V{version}
                </div>
                <div className="flex flex-col gap-0.5 text-left leading-none">
                  <div className="text-sm font-medium leading-none">
                    Generating...
                  </div>
                </div>
              </button>
            </div>
          ) : message ? (
            <div className="my-4">
              <button
                className={`${isActive ? "bg-white" : "bg-gray-100  hover:bg-gray-200"} inline-flex w-full items-center gap-2 rounded-lg border-1 p-1.5`}
                style={{
                  borderImage: "linear-gradient(90deg, rgba(7,11,134,1) 31%, rgba(67,105,224,1) 59%) 1",
                  boxShadow: "0 0 5px rgba(67, 105, 224, 0.7), 0 0 5px rgba(67, 105, 224, 0.7), 0 0 10px rgba(7, 11, 134, 0.6)",
                }}
                onClick={() => onMessageClick(message)}
              >
                <div
                  className={`${isActive ? "bg-gray-100" : "bg-gray-50"} flex size-8 items-center justify-center rounded font-bold`}
                >
                  V{version}
                </div>
                <div className="flex flex-col gap-0.5 text-left leading-none">
                  <div className="text-sm font-medium leading-none">
                    {toTitleCase(part.filename.name)}{" "}
                    {version !== 1 && `v${version}`}
                  </div>
                  <div className="text-xs leading-none text-gray-500">
                    {part.filename.name}
                    {version !== 1 && `-v${version}`}
                    {"."}
                    {part.filename.extension}
                  </div>
                </div>
                <div className="ml-auto">
                  <ArrowLeftIcon />
                </div>
              </button>
            </div>
          ) : (
            <div className="my-4">
              <button
                className="inline-flex w-full items-center gap-2 rounded-lg border-4 border-gray-300 p-1.5"
                disabled
              >
                <div className="flex size-8 items-center justify-center rounded bg-gray-300 font-bold">
                  V{version}
                </div>
                <div className="flex flex-col gap-0.5 text-left leading-none">
                  <div className="text-sm font-medium leading-none">
                    {toTitleCase(part.filename.name)}{" "}
                    {version !== 1 && `v${version}`}
                  </div>
                  <div className="text-xs leading-none text-gray-500">
                    {part.filename.name}
                    {version !== 1 && `-v${version}`}
                    {"."}
                    {part.filename.extension}
                  </div>
                </div>
                <div className="ml-auto">
                  <ArrowLeftIcon />
                </div>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function toTitleCase(rawName: string): string {
  // Split on one or more hyphens or underscores
  const parts = rawName.split(/[-_]+/);

  // Capitalize each part and join them back with spaces
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}
