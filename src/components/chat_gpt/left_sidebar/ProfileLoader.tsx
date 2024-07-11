import { Skeleton, Box } from "@mui/material";

export default function ProfileLoader() {
  return (
    <Box display="flex" alignItems="center" width={200} gap={1}>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={20}
        width="80%"
        style={{ marginBottom: 6 }}
      />
    </Box>
  );
}
