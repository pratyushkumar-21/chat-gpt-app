import { createContext, Dispatch, SetStateAction } from "react";
import {
  ChatHistoryResponseType,
  ProfileResponseType,
} from "../../services/types";

type ChatContextType = {
  chatHistories: ChatHistoryResponseType[];
  selectedContext: string | null;
  profile: ProfileResponseType | null;
  setChatHistories?: Dispatch<SetStateAction<ChatHistoryResponseType[]>>;
  setSelectedContext?: Dispatch<SetStateAction<string | null>>;
  setProfile?: Dispatch<SetStateAction<ProfileResponseType | null>>;
};

const ChatContext = createContext<ChatContextType>({
  chatHistories: [],
  selectedContext: null,
  profile: null,
});

export default ChatContext;
