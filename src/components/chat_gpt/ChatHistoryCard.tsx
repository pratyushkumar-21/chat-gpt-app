import { Stack, Typography } from "@mui/material";
import { ChatHistoryResponseType } from "../../services/types";

type ChatHistoryCardPropsType = {
  chats: ChatHistoryResponseType[];
  header: string;
};

export default function ChatHistoryCard(props: ChatHistoryCardPropsType) {
  const { header, chats } = props;

  return (
    <Stack spacing={2}>
      <Typography variant="body1" className="header-text">
        {header}
      </Typography>
      <Stack spacing={1}>
        {chats.map((chat) => (
          <div key={chat.id} className="chat-card">
            {chat.title}
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
