import { Stack, Skeleton } from "@mui/material";

export default function ChatHistoryLoader() {
  return (
    <Stack spacing={2}>
      {Array(50)
        .fill(null)
        .map((_, i) => (
          <Skeleton key={i} animation="wave" />
        ))}
    </Stack>
  );
}
