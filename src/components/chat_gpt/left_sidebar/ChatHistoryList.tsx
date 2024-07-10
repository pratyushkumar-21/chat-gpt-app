import { useContext, useEffect, useState, useCallback } from "react";
import { Box, Alert } from "@mui/material";
import { memo } from "react";
import ChatContext from "../../../pages/chat_gpt/context";
import ChatHistoryLoader from "./ChatHistoryLoader";
import ChatHistoryCard from "./ChatHistoryCard";
import { fetchChatHistory } from "../../../services/api";
import { ChatHistoryResponseType } from "../../../services/types";
import { sortByDate } from "../../../utils";

function ChatHistoryList() {
  const { chatHistories, setChatHistories } = useContext(ChatContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pinnedChats, setPinnedChats] = useState<ChatHistoryResponseType[]>([]);

  const loadChatHistory = useCallback(async () => {
    setLoading(true);
    const resp = await fetchChatHistory();

    if (resp?.data && setChatHistories) {
      //sorting chat based on created at
      const results = sortByDate<ChatHistoryResponseType>(resp?.data);

      setChatHistories(results);
      setPinnedChats(results.filter((chat) => chat.isPinned));
      setError("");
    } else if (resp?.error && setChatHistories) {
      setError(resp.error);
      setChatHistories([]);
    }

    setLoading(false);
  }, []);

  //fetching chat histories
  useEffect(() => {
    loadChatHistory();
  }, []);

  // handled error occurs while fetching chat history
  if (!loading && error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box mt={2} className="chat-history-list-wrapper">
      {loading ? (
        <ChatHistoryLoader />
      ) : (
        <Box display="flex" flexDirection="column" gap={5}>
          <ChatHistoryCard header="PINNED" chats={pinnedChats} />
          <ChatHistoryCard header="CHAT HISTORY" chats={chatHistories} />
        </Box>
      )}
    </Box>
  );
}

export default memo(ChatHistoryList);
