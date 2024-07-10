import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../common/sidebar";
import Profile from "./Profile";
import SearchInput from "../common/SearchInput";
import { ReactComponent as LeftSidebarIcon } from "../../assets/icons/left_sidebar_icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings.svg";

import styles from "./styles.module.css";

function LeftSidebar() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <LeftSidebarIcon
        onClick={toggleSidebar}
        className={styles.sidebar_icon}
      />
      <Sidebar open={open} toggleSidebar={toggleSidebar}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Profile />
          <Box display="flex" gap={1} alignItems="baseline">
            <SettingIcon />
            <LeftSidebarIcon
              onClick={toggleSidebar}
              className={styles.sidebar_icon}
            />
          </Box>
        </Box>

        <SearchInput />
      </Sidebar>
    </>
  );
}

export default LeftSidebar;
