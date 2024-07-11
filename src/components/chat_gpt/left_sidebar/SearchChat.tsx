import { useContext, useEffect, useCallback, useState } from "react";
import SearchInput from "../../common/SearchInput";
import ChatContext from "../../../pages/chat_gpt/context";
import { CHAT_HISTORIES } from "../../../services/constants";

export default function SearchChat() {
  const { setChatHistories, chatHistories } = useContext(ChatContext);
  const [searchChat, setSearchChat] = useState("");

  const handleSearch = useCallback(() => {
    if (setChatHistories) {
      if (!searchChat) setChatHistories(CHAT_HISTORIES);
      else
        setChatHistories((chats) =>
          chats.filter((chat) =>
            chat.title.toLowerCase().includes(searchChat.toLowerCase())
          )
        );
    }
  }, [searchChat]);

  useEffect(() => {
    handleSearch();
  }, [searchChat]);

  return (
    <SearchInput searchValue={searchChat} setSearchValue={setSearchChat} />
  );
}
