import React from "react";
import {
  Box,
  Drawer,
  DrawerProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const drawerWidth = 300;

interface SidebarPropsType extends DrawerProps {
  toggle: () => void;
  children: React.ReactNode;
  color?: string;
}

export default function Sidebar(props: SidebarPropsType) {
  const { open, toggle, children, color = "#f7f8fa" } = props;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      open={open}
      onClose={toggle}
      variant={isSmallScreen ? "temporary" : "persistent"}
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
