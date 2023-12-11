import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { primaryColor, whiteColor } from "../../../../constants/colors";

const SocialButton = () => {
  const handleOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: "1.1rem", sm: "1.2rem", md: "1.5rem", lg: "1.5rem" },
        paddingTop: "4rem",
        justifyContent: "center",
      }}
    >
      <IconButton
        color="primary"
        onClick={() => handleOnClick("https://github.com/thephenomenal10")}
        sx={{
          height: { xs: "40px", md: "50px", lg: "50px" },
          width: { xs: "40px", md: "50px", lg: "50px" },
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
        onClick={() => handleOnClick("https://www.linkedin.com/in/sahyog-saini-4b511617b/")}
        sx={{
          height: { xs: "40px", md: "50px", lg: "50px" },
          width: { xs: "40px", md: "50px", lg: "50px" },
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
        onClick={() => handleOnClick("https://www.instagram.com/sahyog.saini/")}
        sx={{
          height: { xs: "40px", md: "50px", lg: "50px" },
          width: { xs: "40px", md: "50px", lg: "50px" },
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
        onClick={() => handleOnClick("https://twitter.com/SainiSahyog")}
        sx={{
          height: { xs: "40px", md: "50px", lg: "50px" },
          width: { xs: "40px", md: "50px", lg: "50px" },
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
