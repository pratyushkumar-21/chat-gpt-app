import { createContext } from "react";
import { ChatHistoryResponseType } from "../../services/types";

type ChatContextType = {
  chatHistories: ChatHistoryResponseType[];
  setChatHistories?: (histories: ChatHistoryResponseType[]) => void;
};

const ChatContext = createContext<ChatContextType>({ chatHistories: [] });

export default ChatContext;
