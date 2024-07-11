import { Box } from "@mui/material";
import { ReactComponent as ArrowExternalRightIcon } from "../../../assets/icons/arrow_external_rigth_icon.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google_icon.svg";
import { ReactComponent as MediumIcon } from "../../../assets/icons/medium_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/linkedin_icon.svg";
import { ReactComponent as ProducthuntIcon } from "../../../assets/icons/producthunt_icon.svg";

export default function LinksCard() {
  const links = [
    {
      StartIcon: GoogleIcon,
      name: "google.com",
      url: "https://www.google.com",
    },
    {
      StartIcon: MediumIcon,
      name: "medium.com",
      url: "https://www.medium.com",
    },
    {
      StartIcon: ProducthuntIcon,
      name: "producthunt.com",
      url: "https://www.producthunt.com",
    },
    {
      StartIcon: LinkedInIcon,
      name: "linkedin.com",
      url: "https://www.linkedin.com",
    },
  ];
  return (
    <Box display="flex" gap={1} flexWrap="wrap">
      {links.map((link) => {
        const { StartIcon, name, url } = link;
        return (
          <Box
            className="link-card-wrapper"
            display="flex"
            gap={1}
            p={1}
            alignItems="center"
            component="a"
            href={url}
          >
            <StartIcon />
            {name}
            <ArrowExternalRightIcon />
          </Box>
        );
      })}
    </Box>
  );
}
