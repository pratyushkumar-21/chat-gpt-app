import { useState } from "react";
import { Box } from "@mui/material";
import Profile from "./Profile";
import SearchInput from "../../common/SearchInput";
import LeftSidebarActions from "./LeftSidebarActions";
import ChatHistoryList from "./ChatHistoryList";
import TooltipIcon from "../../common/TooltipIcon";
import CreateNewChat from "../CreateNewChat";
import { ReactComponent as LeftSidebarIcon } from "../../../assets/icons/left_sidebar_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";

function LeftSidebar() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      {!open && (
        <Box onClick={toggleSidebar} ml={2} mt={4}>
          <TooltipIcon title="open sidebar" Icon={LeftSidebarIcon} />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        className="left-sidebar-container"
        p={3}
        gap={2}
        sx={{ display: open ? "inherit" : "none" }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Profile />
          <Box display="flex" gap={1} alignItems="baseline">
            <TooltipIcon title="settings" Icon={SettingsIcon} />
            <TooltipIcon
              title="close sidebar"
              Icon={LeftSidebarIcon}
              onClick={toggleSidebar}
            />
          </Box>
        </Box>
        <SearchInput />
        <LeftSidebarActions />
        <ChatHistoryList />
        <CreateNewChat />
      </Box>
    </>
  );
}

export default LeftSidebar;
