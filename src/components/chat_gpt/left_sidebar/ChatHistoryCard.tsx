import { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import ChatContext from "../../../pages/chat_gpt/context";
import { ChatHistoryResponseType } from "../../../services/types";
import { getTruncatedChatTitle } from "../../../utils";

type ChatHistoryCardPropsType = {
  chats: ChatHistoryResponseType[];
  header: string;
};

export default function ChatHistoryCard(props: ChatHistoryCardPropsType) {
  const { header, chats } = props;
  const { setSelectedContext, selectedContext } = useContext(ChatContext);

  const handleChatClick = (chatId: string) => {
    if (setSelectedContext) setSelectedContext(chatId);
  };

  console.log("selectedContext", selectedContext);

  return (
    <Stack spacing={2}>
      <Typography variant="body1" className="header-text">
        {header}
      </Typography>
      <Stack spacing={1}>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-card ${
              chat.id === selectedContext ? "chat-card-active " : undefined
            }`}
            onClick={() => handleChatClick(chat.id)}
          >
            {getTruncatedChatTitle(chat.title)}
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
