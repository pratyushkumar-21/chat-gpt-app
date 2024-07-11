import { useContext } from "react";
import { Button } from "@mui/material";
import ChatContext from "../../pages/chat_gpt/context";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";

type CreateNewChatPropsType = {
  btnText?: string;
  size?: "small" | "medium" | "large";
};

export default function CreateNewChat(props: CreateNewChatPropsType) {
  const { btnText = "Start new chat", size = "medium" } = props;
  const { setSelectedContext, selectedContext } = useContext(ChatContext);

  const handleCreateNewChat = () => {
    if (setSelectedContext) setSelectedContext("");
  };
  console.log("new chat selectedContext == ", selectedContext);

  return (
    <Button
      variant="contained"
      size={size}
      fullWidth
      startIcon={<PlusIcon />}
      onClick={handleCreateNewChat}
    >
      {btnText}
    </Button>
  );
}
