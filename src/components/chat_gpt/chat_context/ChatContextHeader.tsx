import { useState } from "react";
import { Box, Divider, Typography, Chip } from "@mui/material";
import TooltipIcon from "../../common/TooltipIcon";
import CreateNewChat from "../CreateNewChat";
import { ReactComponent as RightSidebarIcon } from "../../../assets/icons/right_sidebar_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/icons/archive_icon.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash_icon.svg";

type ChatContextHeaderPropsType = {
  title: string;
  open: boolean;
  toggleSidebar: () => void;
};

function ChatContextHeader(props: ChatContextHeaderPropsType) {
  const { title, toggleSidebar, open } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      flexWrap="wrap"
      gap={2}
    >
      <Typography variant="body1">
        {title} <Chip label="GPT-4" />
      </Typography>{" "}
      <Box display="flex" alignItems="center" gap={1}>
        <CreateNewChat btnText="new chat" size="small" />
        <Divider orientation="vertical" />
        <TooltipIcon title="settings" Icon={SettingsIcon} />
        <TooltipIcon title="delete" Icon={TrashIcon} />
        <TooltipIcon title="archive" Icon={ArchiveIcon} />
        <TooltipIcon
          title={`${open ? "close" : "open"} right sidebar`}
          Icon={RightSidebarIcon}
          onClick={toggleSidebar}
        />
      </Box>
    </Box>
  );
}

export default ChatContextHeader;
