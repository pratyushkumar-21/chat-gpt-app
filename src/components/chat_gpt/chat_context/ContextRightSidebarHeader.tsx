import { Box, Stack, Avatar, Typography } from "@mui/material";
import chatGPTlogo from "../../../assets/images/chat_gpt.png";

export default function ContextRightSidebarHeader() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
      <Avatar
        alt="Chat GPT-4 image"
        src={chatGPTlogo}
        sx={{ width: 60, height: 60 }}
      />
      <Typography variant="body1" className="active-text">
        GPT 4 Model
      </Typography>
      <Box textAlign="center">
        he latest GPT-4 model with improved instruction following, JSON mode,
        reproducible outputs, parallel function calling, and more...
      </Box>
      <Box display="flex" gap={2}>
        <Stack>
          <Typography variant="caption">CONTEXT WINDOW</Typography>
          <Typography variant="subtitle2" className="active-text">
            128,000 tokens
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="caption">TRAINING DATA</Typography>
          <Typography variant="subtitle2" className="active-text">
            {" "}
            Up to Apr 2023
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
