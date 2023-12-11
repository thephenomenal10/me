import { Box, Typography } from "@mui/material";
import React from "react";

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
      <Typography variant="body1">Designed and Developed by Sahyog Saini</Typography>
      <Typography variant="body1">Copyright © 2023</Typography>
    </Box>
  );
};

export default Footer;
