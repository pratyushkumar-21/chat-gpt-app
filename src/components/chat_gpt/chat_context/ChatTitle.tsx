import { Box, Divider, Typography } from "@mui/material";
import { getTime } from "../../../utils";

type ChatTitle = {
  title: string;
  createdAt: string;
};

export default function ChatTitle(props: ChatTitle) {
  const { title, createdAt } = props;
  return (
    <Box display="flex" gap={2}>
      <Typography variant="body1">{title}</Typography>
      <Divider orientation="vertical" />
      <Typography className="inactive-text">{getTime(createdAt)}</Typography>
    </Box>
  );
}
