import { memo, useContext, useEffect, useCallback, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChatContextHeader from "./ChatContextHeader";
import Context from "./Context";
import ChatContextInput from "./ChatContextInput";
import ChatContext from "../../../pages/chat_gpt/context";
import { fetchChatContext } from "../../../services/api";
import { ChatContextResponseType } from "../../../services/types";

function ChatContextComponent() {
  const { selectedContext } = useContext(ChatContext);
  const [loading, setLoading] = useState(selectedContext ? true : false);
  const [error, setError] = useState("");
  const [chatContext, setChatContext] =
    useState<ChatContextResponseType | null>(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const loadChatContext = useCallback(async () => {
    if (!selectedContext) {
      setChatContext(null);
      return;
    }

    setLoading(true);

    const resp = await fetchChatContext(selectedContext);

    if (resp?.data) {
      setChatContext(resp.data);
      setError("");
    } else if (resp.error) {
      setError(resp.error);
      setChatContext(null);
    }

    setLoading(false);
  }, [selectedContext]);

  //it will load the chat context when ever chat is selected from left sidebar
  useEffect(() => {
    loadChatContext();
  }, [selectedContext]);

  if (loading) return <div>Loading...</div>;

  if (!loading && error) return <div>{error}</div>;

  return (
    <Box className="chat-context-wrapper" display="flex" flexDirection="column">
      {chatContext && (
        <>
          <ChatContextHeader title={chatContext.title} />
          <Divider />
        </>
      )}
      <Box
        p={3}
        mx={isSmallScreen ? 1 : 7}
        display="flex"
        flexDirection="column"
        flexGrow={1}
        justifyContent={chatContext ? "space-between" : "end"}
      >
        {chatContext && <Context {...chatContext} />}
        {!chatContext && (
          <Box m="auto">
            <Alert severity="info" icon={false}>
              <Typography variant="h4" className="inactive-text">
                Start New Chat
              </Typography>
            </Alert>
          </Box>
        )}
        <ChatContextInput />
      </Box>
    </Box>
  );
}

export default memo(ChatContextComponent);
