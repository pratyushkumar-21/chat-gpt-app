import { Box, Skeleton, Stack } from "@mui/material";

export default function ChatContextLoader() {
  return (
    <Stack width={`100%`}>
      {Array(2)
        .fill(null)
        .map((_, i) => (
          <Stack p={6} spacing={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
              <Stack>
                <Skeleton
                  animation="wave"
                  height={20}
                  width={200}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width={400}
                  style={{ marginBottom: 6 }}
                />
              </Stack>
            </Box>

            <Skeleton variant="rounded" height={200} />
          </Stack>
        ))}
    </Stack>
  );
}
