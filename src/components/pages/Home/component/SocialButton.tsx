import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { primaryColor, whiteColor } from "../../../../constants/colors";

const SocialButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1.5rem",
        paddingTop: "3rem",
        justifyContent: "center",
      }}
    >
      <IconButton
        color="primary"
        sx={{
          height: "50px",
          width: "50px",
          backgroundColor: whiteColor,
          "&:hover": {
            boxShadow: "0 0 10px 3px rgba(66, 231, 235, 0.5)",
            borderRadius: "50%",
          },
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color="primary"
        sx={{
          height: "50px",
          width: "50px",
          backgroundColor: whiteColor,
          "&:hover": {
            boxShadow: "0 0 10px 3px rgba(66, 231, 235, 0.5)",
            borderRadius: "50%",
          },
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color="primary"
        sx={{
          height: "50px",
          width: "50px",
          backgroundColor: whiteColor,
          "&:hover": {
            boxShadow: "0 0 10px 3px rgba(66, 231, 235, 0.5)",
            borderRadius: "50%",
          },
        }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color="primary"
        sx={{
          height: "50px",
          width: "50px",
          backgroundColor: whiteColor,
          "&:hover": {
            boxShadow: "0 0 10px 3px rgba(66, 231, 235, 0.5)",
            borderRadius: "50%",
          },
        }}
      >
        <FontAwesomeIcon icon={faXTwitter} style={{ color: primaryColor }} />
      </IconButton>
    </Box>
  );
};

export default SocialButton;
