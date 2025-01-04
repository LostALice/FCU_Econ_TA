// Code by AkinoAlice@TyrantRey

import { useState, useEffect, useRef, useContext } from "react";

import { MessageBox } from "@/components/chat/messageBox";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";

import { askQuestion } from "@/pages/api/api";
import { getCookie } from "cookies-next";
import { IMessageInfo } from "@/types/chat/type";

import { AuthContext } from "@/contexts/AuthContext";

export default function ChatPage() {
  const { role, setRole } = useContext(AuthContext);

  const [inputQuestion, setInputQuestion] = useState<string>("");
  const [chatInfo, setChatInfo] = useState<IMessageInfo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [chatroomUUID, setChatroomUUID] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  async function sendMessage() {
    setLoading(true);
    if (inputQuestion == "") {
      console.error("no message");
      return;
    }
    setInputQuestion("");

    const message = await askQuestion(
      chatroomUUID,
      inputQuestion,
      "Anonymous",
      "default"
    );

    const message_info: IMessageInfo = {
      chatUUID: chatroomUUID,
      questionUUID: message.questionUUID,
      question: inputQuestion,
      answer: message.answer,
      files: message.files,
      time: new Date().toDateString(),
    };

    setChatInfo([...chatInfo, message_info]);
    setLoading(false);
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  useEffect(() => {
    fetch(siteConfig.api_url + "/uuid/")
      .then((res) => res.json())
      .then((data) => {
        setChatroomUUID(data);
      });

    const userRole = getCookie("role") || "未登入";
    setRole(userRole);
  }, [setRole]);

  return (
    <DefaultLayout>
      <Card className="h-[90vh] w-full flex flex-col shadow-md rounded-lg border">
        <CardHeader className="flex items-center justify-between p-4">
          <span className="text-sm dark:text-gray-400">聊天室 ID: {chatroomUUID}</span>
          <span className="text-xs dark:text-gray-400 italic">
            機械人可能會出錯。請參考文檔核對重要資訊。
          </span>
          <span className="text-sm dark:text-gray-400">身份: {role}</span>
        </CardHeader>

        {/* Chat Area */}
        <CardBody className="flex-grow overflow-y-auto p-4 space-y-4 border-y">
          {chatInfo.map((item) => (
            <div
              key={item.questionUUID}
              className={`flex flex-col ${item.question === inputQuestion ? "items-end" : "items-start"
                }`}
            >
              <div
                className={`rounded-lg p-3 max-w-[80%] ${item.question === inputQuestion
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
                  }`}
              >
                <p>{item.question}</p>
                <p className="text-sm mt-2">{item.answer}</p>
              </div>
              <span className="text-xs text-gray-400 mt-1">{item.time}</span>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-center mt-4">
              <Spinner color="primary" />
            </div>
          )}
          <div ref={scrollRef} />
        </CardBody>
        <div className="sticky bottom-0  p-4 flex items-center space-x-2">
          <div className="relative flex-grow">
            <textarea
              className="w-full resize-none p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="傳送訊息給TA"
              rows={1}
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={isLoading}
              style={{ overflow: "hidden", minHeight: "2.5rem" }}
            />
          </div>
          <Button
            className="ml-2"
            onPressEnd={sendMessage}
            disabled={isLoading || inputQuestion.trim() === ""}
          >
            傳送
          </Button>
        </div>
      </Card>
    </DefaultLayout>
  );
}
