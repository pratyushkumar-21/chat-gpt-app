import { Tooltip, IconButton } from "@mui/material";

type TooltipIconPropsType = {
  title: string;
  Icon: React.FC;
  onClick?: () => void;
};

export default function TooltipIcon(props: TooltipIconPropsType) {
  const { title, Icon, onClick } = props;
  return (
    <Tooltip title={title} onClick={onClick}>
      <IconButton sx={{ p: 0 }}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
