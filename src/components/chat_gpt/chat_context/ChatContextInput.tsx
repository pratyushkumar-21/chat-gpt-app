import {
  memo,
  useState,
  useRef,
  useLayoutEffect,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { Box, TextField, Typography, Stack, Button, Chip } from "@mui/material";
import TooltipIcon from "../../common/TooltipIcon";
import ChatContext from "../../../pages/chat_gpt/context";
import { ReactComponent as BookIcon } from "../../../assets/icons/book_icon.svg";
import { ReactComponent as MicrophoneIcon } from "../../../assets/icons/microphone_icon.svg";
import { ReactComponent as PhotoIcon } from "../../../assets/icons/photo_icon.svg";
import { ReactComponent as PaperclipIcon } from "../../../assets/icons/paperclip_icon.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/send_icon.svg";
import { ReactComponent as GridIcon } from "../../../assets/icons/grid_icon.svg";
import { ChatContextResponseType, MessageType } from "../../../services/types";

type ChatContextInputPropsType = {
  setChatContext: Dispatch<SetStateAction<ChatContextResponseType | null>>;
};

function ChatContextInput(props: ChatContextInputPropsType) {
  const { setChatContext } = props;
  const [message, setMesage] = useState("");
  const { selectedContext } = useContext(ChatContext);

  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMesage(e.target.value.trimStart());
  };

  const handleSendMessage = () => {
    if (selectedContext) {
      setChatContext((prevChatContext) => {
        if (!prevChatContext) return null;

        const newMessage: MessageType = {
          id: Date.now().toString(),
          created_at: new Date().toString(),
          author: "user",
          content: message,
        };

        const newChatContext = {
          ...prevChatContext,
          messages: [...prevChatContext.messages, newMessage],
        };

        return newChatContext;
      });
    }
    setMesage("");
  };

  //this will always focus on chat input
  useLayoutEffect(() => {
    if (inputRef.current) {
      const element = inputRef.current;
      element.focus();
    }

    setMesage("");
  }, [selectedContext]);

  return (
    <Box
      className="chat-context-box chat-context-input-wrapper"
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="end"
      gap={2}
      flexWrap="wrap"
    >
      <Stack flexGrow={1} spacing={4}>
        <Typography variant="body2" className="inactive-text">
          How Can I help you?
        </Typography>
        <TextField
          variant="standard"
          multiline
          className="chat-context-input-box"
          value={message}
          onChange={handleMessageChange}
          inputRef={inputRef}
        />
      </Stack>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <Stack direction="row" spacing={1}>
          <Chip icon={<BookIcon />} label="Library" className="chip" />
          <TooltipIcon title="attachment" Icon={PaperclipIcon} />
          <TooltipIcon title="photo" Icon={PhotoIcon} />
          <TooltipIcon title="microphone" Icon={MicrophoneIcon} />
          <TooltipIcon title="grid" Icon={GridIcon} />
        </Stack>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          size="small"
          disabled={!message.length}
          onClick={handleSendMessage}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default memo(ChatContextInput);
