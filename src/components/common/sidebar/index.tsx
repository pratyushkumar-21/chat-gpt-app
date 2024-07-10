import React from "react";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

const drawerWidth = 300;

interface SidebarPropsType extends DrawerProps {
  toggleSidebar: (flag: boolean) => void;
  children: React.ReactNode;
  color?: string;
}

export default function Sidebar(props: SidebarPropsType) {
  const { open, toggleSidebar, children, color = "#f7f8fa" } = props;

  return (
    <Drawer
      open={open}
      onClose={toggleSidebar}
      variant="persistent"
      sx={{
        width: open ? drawerWidth : null,
      }}
      {...props}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: drawerWidth,
          backgroundColor: color,
          height: "100vh",
        }}
        p={3}
        gap={2}
      >
        {children}
      </Box>
    </Drawer>
  );
}
