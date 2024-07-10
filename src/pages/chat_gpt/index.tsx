import { useState } from "react";
import { Box } from "@mui/material";
import LeftSidebar from "../../components/chat_gpt/left_sidebar";
import ChatContext from "./context";
import ChatContextComponent from "../../components/chat_gpt/chat_context";
import { ChatHistoryResponseType } from "../../services/types";

export default function ChatGPT() {
  const [chatHistories, setChatHistories] = useState<ChatHistoryResponseType[]>(
    []
  );

  const [selectedContext, setSelectedContext] = useState<string | null>(null);

  return (
    <ChatContext.Provider
      value={{
        chatHistories,
        setChatHistories,
        setSelectedContext,
        selectedContext,
      }}
    >
      <Box m={2} display="flex">
        <LeftSidebar />
        <ChatContextComponent />
      </Box>
    </ChatContext.Provider>
  );
}
