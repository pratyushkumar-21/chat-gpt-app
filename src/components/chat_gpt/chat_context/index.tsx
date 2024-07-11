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
import ContextRightSidebar from "./ContextRightSidebar";
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
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((open) => !open);
  };

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
    setOpen(false);
  }, [selectedContext]);

  if (loading) return <div>Loading...</div>;

  if (!loading && error) return <div>{error}</div>;

  return (
    <Box className="chat-context-wrapper" display="flex">
      <Box display="flex" flexDirection="column" width={"100%"}>
        {chatContext && (
          <>
            <ChatContextHeader
              title={chatContext.title}
              toggleSidebar={toggleSidebar}
              open={open}
            />
            <Divider light />
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

      {chatContext && open && <ContextRightSidebar title={chatContext.title} />}
    </Box>
  );
}

export default memo(ChatContextComponent);
