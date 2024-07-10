import React from "react";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

const drawerWidth = 300;

interface SidebarPropsType extends DrawerProps {
  toggle: () => void;
  children: React.ReactNode;
  color?: string;
}

export default function Sidebar(props: SidebarPropsType) {
  const { open, toggle, children, color = "#f7f8fa" } = props;

  return (
    <Drawer
      open={open}
      onClose={toggle}
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
