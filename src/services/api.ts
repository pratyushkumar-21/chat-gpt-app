import {
  APIResponse,
  ChatHistoryResponseType,
  ChatContextResponseType,
  ProfileResponseType,
} from "./types";
import { CHAT_HISTORIES, CHAT_CONTEXT, USER_DATA } from "./constants";

//this will simulate api call
const fetcher = <T>(data: T): Promise<APIResponse<T>> => {
  return new Promise((res) => {
    setTimeout(() => {
      if (true) {
        res({ data });
      } else {
        res({ error: "Something went wrong!" });
      }
    }, 0);
  });
};

export const fetchProfile = async () => {
  const resp = await fetcher<ProfileResponseType>(USER_DATA);
  return resp;
};

export const fetchChatHistory = async () => {
  const resp = await fetcher<ChatHistoryResponseType[]>(CHAT_HISTORIES);
  return resp;
};

export const fetchChatContext = async (chatId: string) => {
  const resp = await fetcher<ChatContextResponseType>(CHAT_CONTEXT);
  return resp;
};
