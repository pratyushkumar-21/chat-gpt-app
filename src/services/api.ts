import {
  APIResponse,
  ChatHistoryResponseType,
  ChatContextResponseType,
} from "./types";
import { CHAT_HISTORIES, CHAT_CONTEXT } from "./constants";

//this will simulate api call
const fetcher = <T>(data: T): Promise<APIResponse<T>> => {
  return new Promise((res) => {
    setTimeout(() => {
      if (true) {
        res({ data });
      } else {
        res({ error: "Something went wrong!" });
      }
    }, 1000);
  });
};

export const fetchChatHistory = async () => {
  const resp = await fetcher<ChatHistoryResponseType[]>(CHAT_HISTORIES);
  return resp;
};

export const fetchChatContext = async (chatId: string) => {
  const resp = await fetcher<ChatContextResponseType>(CHAT_CONTEXT);
  return resp;
};
