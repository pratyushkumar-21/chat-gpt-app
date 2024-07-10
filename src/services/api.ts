import { APIResponse, ChatHistoryResponseType } from "./types";
import { CHAT_HISTORIES } from "./constants";

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
