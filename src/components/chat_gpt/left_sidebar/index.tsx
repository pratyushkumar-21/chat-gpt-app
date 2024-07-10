import { useState } from "react";
import { Box, Button } from "@mui/material";
import Sidebar from "../../common/sidebar";
import Profile from "./Profile";
import SearchInput from "../../common/SearchInput";
import LeftSidebarActions from "./LeftSidebarActions";
import ChatHistoryList from "./ChatHistoryList";
import TooltipIcon from "../../common/TooltipIcon";
import { ReactComponent as LeftSidebarIcon } from "../../../assets/icons/left_sidebar_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus_icon.svg";

function LeftSidebar() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <LeftSidebarIcon onClick={toggleSidebar} />
      <Sidebar open={open} toggle={toggleSidebar}>
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

        <Button fullWidth variant="contained" startIcon={<PlusIcon />}>
          Start new chat
        </Button>
      </Sidebar>
    </>
  );
}

export default LeftSidebar;
