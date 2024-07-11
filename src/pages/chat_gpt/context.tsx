import { createContext } from "react";
import {
  ChatHistoryResponseType,
  ProfileResponseType,
} from "../../services/types";

type ChatContextType = {
  chatHistories: ChatHistoryResponseType[];
  selectedContext: string | null;
  profile: ProfileResponseType | null;
  setChatHistories?: (histories: ChatHistoryResponseType[]) => void;
  setSelectedContext?: (context: string) => void;
  setProfile?: (profile: ProfileResponseType | null) => void;
};

const ChatContext = createContext<ChatContextType>({
  chatHistories: [],
  selectedContext: null,
  profile: null,
});

export default ChatContext;
