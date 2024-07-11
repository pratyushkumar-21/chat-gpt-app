import { memo, useContext } from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import ChatTitle from "./ChatTitle";
import { MessageType } from "../../../services/types";
import ChatContext from "../../../pages/chat_gpt/context";
import { getFullname } from "../../../utils";

function UserMessage(props: MessageType) {
  const { content, created_at } = props;
  const { profile } = useContext(ChatContext);

  return (
    <Box display="flex" gap={2}>
      {profile && (
        <Avatar
          alt="user image"
          src={profile.profile_url}
          sx={{ width: 30, height: 30 }}
        />
      )}
      <Stack>
        {profile && (
          <ChatTitle
            title={getFullname(profile.first_name, profile.last_name)}
            createdAt={created_at}
          />
        )}
        <Typography className="inactive-text">{content}</Typography>
      </Stack>
    </Box>
  );
}

export default memo(UserMessage);
