import { createContext } from "react";
import { ChatHistoryResponseType } from "../../services/types";

type ChatContextType = {
  chatHistories: ChatHistoryResponseType[];
  setChatHistories?: (histories: ChatHistoryResponseType[]) => void;
  selectedContext: string | null;
  setSelectedContext?: (context: string) => void;
};

const ChatContext = createContext<ChatContextType>({
  chatHistories: [],
  selectedContext: null,
});

export default ChatContext;
