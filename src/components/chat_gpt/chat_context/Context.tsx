import { memo, useRef, useLayoutEffect } from "react";
import { Stack, Divider, Typography } from "@mui/material";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";
import { ChatContextResponseType, MessageType } from "../../../services/types";
import { sortByDate, getDateStatus } from "../../../utils";

function Context(props: ChatContextResponseType) {
  const { messages } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const sortedMessages = sortByDate(messages);
  const messageDateMap = new Map<string, MessageType[]>();

  sortedMessages.forEach((message) => {
    const key = message.created_at;
    if (messageDateMap.has(key)) {
      const oldData = messageDateMap.get(key) || [];
      messageDateMap.set(key, [...oldData, message]);
    } else {
      messageDateMap.set(key, [message]);
    }
  });

  //this will scroll messages to bottom to see latest message on mounting
  useLayoutEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.scrollTop = element.scrollHeight;
    }
  }, []);

  return (
    <Stack spacing={3} className="context-wrapper" ref={ref}>
      {[...messageDateMap.keys()].map((key) => (
        <>
          <Divider light>
            <Typography className="inactive-text">
              {getDateStatus(key)}
            </Typography>
          </Divider>
          {(messageDateMap.get(key) || []).map((message) =>
            message.author === "user" ? (
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
