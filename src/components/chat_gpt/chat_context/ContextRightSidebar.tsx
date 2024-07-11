import { Box, Alert, Typography, Stack, Divider, Chip } from "@mui/material";
import ContextRightSidebarHeader from "./ContextRightSidebarHeader";
import ContextStatistics from "./ContextStatistics";
import { ReactComponent as ChevronRightIcon } from "../../../assets/icons/chevron_right_icon.svg";

type RightSidebarPropsType = {
  title: string;
};

function ContextRightSidebar(props: RightSidebarPropsType) {
  const { title } = props;

  return (
    <Box
      className="context-right-sidebar-wrapper inactive-text"
      p={2}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <ContextRightSidebarHeader />

      <Divider flexItem light />

      <Stack spacing={1}>
        <Alert severity="success">
          <Typography variant="caption">
            Searched for: <span className="active-text">{title}</span>
          </Typography>
        </Alert>
        <Alert severity="success">
          <Typography variant="caption">
            Successfully generated responses
          </Typography>
        </Alert>
      </Stack>

      <ContextStatistics />

      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="caption">Fact check history</Typography>
          <ChevronRightIcon />
        </Box>
        <Divider light />
      </Box>
    </Box>
  );
}

export default ContextRightSidebar;
