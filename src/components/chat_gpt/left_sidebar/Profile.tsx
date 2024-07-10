import { Box, Avatar, Typography } from "@mui/material";

function Profile() {
  return (
    <Box display="flex" gap={1} alignItems="center">
      <Avatar alt="user profile photo" src="https://picsum.photos/200" />
      <Typography variant="body1" m={0}>
        Jhon Deo
      </Typography>
    </Box>
  );
}

export default Profile;
