import { Box, Avatar, Stack, Typography, Divider, Chip } from "@mui/material";
import { memo } from "react";
import TooltipIcon from "../../common/TooltipIcon";
import ChatTitle from "./ChatTitle";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark_icon.svg";
import { ReactComponent as ReloadIcon } from "../../../assets/icons/reload_icon.svg";
import { ReactComponent as ShareIcon } from "../../../assets/icons/share_icon.svg";
import { ReactComponent as CopyIcon } from "../../../assets/icons/copy_icon.svg";
import { ReactComponent as ThreeDotsIcon } from "../../../assets/icons/three_dots_icon.svg";
import { MessageType } from "../../../services/types";
import { getTime } from "../../../utils";

function SystemMessage(props: MessageType) {
  const { content, created_at } = props;

  return (
    <Box className="chat-context-box" p={3} display="flex" gap={2}>
      <Avatar
        alt="systme ai image"
        src="https://picsum.photos/id/2/200/200"
        sx={{ width: 24, height: 24 }}
      />
      <Stack spacing={1}>
        <ChatTitle title="LanguageGUI" createdAt={created_at} />
        <Typography variant="subtitle2" className="inactive-text">
          {content}
        </Typography>

        <Box
          display="flex"
          gap={2}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box display="flex" gap={2}>
            <TooltipIcon title="reload" Icon={ReloadIcon} />
            <TooltipIcon title="copy" Icon={CopyIcon} />
            <TooltipIcon title="share" Icon={ShareIcon} />
            <TooltipIcon title="bookmark" Icon={BookmarkIcon} />
            <TooltipIcon title="menu" Icon={ThreeDotsIcon} />
          </Box>
          <Chip label="32 tokens" className="chip" />
        </Box>
      </Stack>
    </Box>
  );
}

export default memo(SystemMessage);
