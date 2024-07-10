import { memo, useState } from "react";
import { Box, InputBase } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search_icon.svg";
import { ReactComponent as CommandIcon } from "../../../assets/icons/command_icon.svg";

function SearchInput() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e?.target?.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      className="left-sidebar-box-component-wrapper"
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for chats..."
        value={search}
        onChange={handleSearchChange}
      />
      <Box className={`keyboard-icons keyboard-icons-active`}>
        <CommandIcon /> K
      </Box>
    </Box>
  );
}

export default memo(SearchInput);
