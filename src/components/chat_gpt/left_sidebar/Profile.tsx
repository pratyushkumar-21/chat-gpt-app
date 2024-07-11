import { useCallback, useEffect, useState, useContext } from "react";
import { Box, Avatar, Typography, Alert } from "@mui/material";
import ProfileLoader from "./ProfileLoader";
import { fetchProfile } from "../../../services/api";
import { getFullname } from "../../../utils";
import ChatContext from "../../../pages/chat_gpt/context";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { profile, setProfile } = useContext(ChatContext);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    const resp = await fetchProfile();

    if (resp?.data && setProfile) {
      setProfile(resp.data);
      setError("");
    } else if (resp.error && setProfile) {
      setError(resp.error);
      setProfile(null);
    }

    setLoading(false);
  }, []);

  //it will load user profile
  useEffect(() => {
    loadProfile();
  }, []);

  if (loading) return <ProfileLoader />;
  if (!loading && error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box display="flex" gap={1} alignItems="center">
      {profile && (
        <>
          <Avatar alt="user profile photo" src={profile.profile_url} />
          <Typography variant="body1" m={0}>
            {getFullname(profile.first_name, profile.last_name)}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Profile;
