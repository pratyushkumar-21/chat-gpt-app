import { Box } from "@mui/material";
import LinksCard from "./LinksCard";

export default function ContextStatistics() {
  return (
    <Box
      className="chat-context-box"
      p={1}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Box>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor
      </Box>
      <ol className="ordered-list-wrapper">
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </li>
      </ol>
      <Box>Lorem ipsum dolor sit amet consectetur</Box>

      <LinksCard />
    </Box>
  );
}
