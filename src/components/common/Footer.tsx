import { Box, Typography } from "@mui/material";
import React from "react";
import { primaryColor } from "../../constants/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "2.5rem",
        marginTop: "auto",
      }}
    >
      <Typography variant="body1">
        Designed and Developed by <span style={{ color: primaryColor }}> Sahyog Saini</span>
      </Typography>
      <Typography variant="body1">Copyright © 2023</Typography>
    </Box>
  );
};

export default Footer;
