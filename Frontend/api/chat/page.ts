// Code by AkinoAlice@TyrantRey

import { TAskQuestionResponseFormat, IDocsFormat } from "@/types/chat/type";
import { siteConfig } from "@/config/site";

export async function askQuestion(
  chatUUID: string,
  question: string,
  userID: string,
  language: string,
  collection: string | "default" = "default"
): Promise<TAskQuestionResponseFormat> {
  const resp = await fetch(siteConfig.api_url + "/chat/" + chatUUID, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatUUID,
      question: question,
      user_id: userID,
      language: language,
      collection: collection,
    }),
  });
  const data = await resp.json();
  return {
    questionUUID: data.question_uuid,
    answer: data.answer,
    files: data.files,
  };
}
