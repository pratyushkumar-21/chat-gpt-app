import { memo, useEffect, useRef } from "react";
import { Stack, Divider, Typography } from "@mui/material";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";
import { ChatContextResponseType, MessageType } from "../../../services/types";
import { sortByDate, getDateStatus } from "../../../utils";
import { AUTHOR_USER } from "../../../services/constants";

function Context(props: ChatContextResponseType) {
  const { messages, created_at } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const sortedMessages = sortByDate(messages, "asc");
  const messageDateMap = new Map<
    string,
    { messages: MessageType[]; createdAt: string }
  >();

  sortedMessages.forEach((message) => {
    const date = new Date(message.created_at);
    const key = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    if (messageDateMap.has(key)) {
      const oldData = messageDateMap.get(key);
      const newData = {
        createdAt: oldData?.createdAt || "",
        messages: [...(oldData?.messages || []), message],
      };
      messageDateMap.set(key, newData);
    } else {
      messageDateMap.set(key, {
        messages: [message],
        createdAt: message.created_at,
      });
    }
  });

  //this will scroll messages to bottom
  useEffect(() => {
    if (ref.current) {
      const ele = ref.current;
      ele.scrollTop = ele.scrollHeight;
    }
  }, [messages]);

  return (
    <Stack spacing={3} className="context-wrapper" ref={ref}>
      {[...messageDateMap.keys()].map((key) => (
        <>
          <Divider light>
            <Typography className="inactive-text">
              {getDateStatus(messageDateMap.get(key)?.createdAt || "")}
            </Typography>
          </Divider>
          {(messageDateMap.get(key)?.messages || []).map((message) =>
            message.author === AUTHOR_USER ? (
              <UserMessage {...message} key={message.id} />
            ) : (
              <SystemMessage key={message.id} {...message} />
            )
          )}
        </>
      ))}
    </Stack>
  );
}

export default memo(Context);
