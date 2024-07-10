import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LeftSidebar from "../../components/chat_gpt/LeftSidebar";
import ChatContext from "./context";
import { ChatHistoryResponseType } from "../../services/types";

export default function ChatGPT() {
  const [chatHistories, setChatHistories] = useState<ChatHistoryResponseType[]>(
    []
  );

  return (
    <ChatContext.Provider value={{ chatHistories, setChatHistories }}>
      <Box m={2} display="flex" gap={2}>
        <LeftSidebar />
        hiiiiii
      </Box>
    </ChatContext.Provider>
  );
}
