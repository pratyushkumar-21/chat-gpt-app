import { useState } from "react";
import { Box } from "@mui/material";
import LeftSidebar from "../../components/chat_gpt/left_sidebar";
import ChatContext from "./context";
import ChatContextComponent from "../../components/chat_gpt/chat_context";
import {
  ChatHistoryResponseType,
  ProfileResponseType,
} from "../../services/types";

export default function ChatGPT() {
  const [chatHistories, setChatHistories] = useState<ChatHistoryResponseType[]>(
    []
  );

  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileResponseType | null>(null);

  return (
    <ChatContext.Provider
      value={{
        chatHistories,
        setChatHistories,
        setSelectedContext,
        selectedContext,
        profile,
        setProfile,
      }}
    >
      <Box display="flex">
        <LeftSidebar />
        <ChatContextComponent />
      </Box>
    </ChatContext.Provider>
  );
}
