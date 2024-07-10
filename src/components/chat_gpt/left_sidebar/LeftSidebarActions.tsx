import { memo } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ReactComponent as MessageIcon } from "../../../assets/icons/message_icon.svg";
import { ReactComponent as BookIcon } from "../../../assets/icons/book_icon.svg";
import { ReactComponent as GridIcon } from "../../../assets/icons/grid_icon.svg";
import { ReactComponent as CommandIcon } from "../../../assets/icons/command_icon.svg";

function LeftSidebarActions() {
  const items = [
    {
      Icon: MessageIcon,
      title: "Chats",
      ShortcutKeyIcon: CommandIcon,
      shortcutKeyText: "1",
      isActive: false,
    },
    {
      Icon: BookIcon,
      title: "Library",
      ShortcutKeyIcon: CommandIcon,
      shortcutKeyText: "2",
      isActive: true,
    },
    {
      Icon: GridIcon,
      title: "Apps",
      ShortcutKeyIcon: CommandIcon,
      shortcutKeyText: "3",
      isActive: false,
    },
  ];

  return (
    <Box mt={2}>
      <List>
        {items.map((item) => {
          const { title, Icon, shortcutKeyText, ShortcutKeyIcon, isActive } =
            item;

          return (
            <ListItem
              disablePadding
              key={title}
              className={isActive ? `left-sidebar-actions-active` : undefined}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  className={!isActive ? "not-active-text" : undefined}
                />
                <Box
                  className={`keyboard-icons ${
                    isActive ? "keyboard-icons-active" : undefined
                  }`}
                >
                  <ShortcutKeyIcon /> {shortcutKeyText}
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>H</ListItemIcon>
          <ListItemText primary="Inbox" />
          hooo
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>K</ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default memo(LeftSidebarActions);
