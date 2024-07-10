import { Box, Skeleton } from "@mui/material";

export default function ChatHistoryLoader() {
  return (
    <Box>
      {Array(50)
        .fill(null)
        .map((_, i) => (
          <Skeleton key={i} animation="wave" />
        ))}
    </Box>
  );
}
