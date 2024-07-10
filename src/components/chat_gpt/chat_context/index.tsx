import { memo } from "react";
import { Box, Divider } from "@mui/material";
import ChatContextHeader from "./ChatContextHeader";
import ChatContextInput from "./ChatContextInput";

function ChatContextComponent() {
  return (
    <Box className="chat-context-wrapper" display="flex" flexDirection="column">
      <ChatContextHeader />
      <Divider />
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        flexGrow={1}
        justifyContent="space-between"
      >
        <div>hiii</div>
        <ChatContextInput />
      </Box>
    </Box>
  );
}

export default memo(ChatContextComponent);
