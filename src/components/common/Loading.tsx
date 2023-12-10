import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        fontSize: "1.2rem",
        fontWeight: 600,
        textAlign: "center",
        position: "absolute",
        top: " 50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <CircularProgress />
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
      >
        Loading. Please wait!
      </Typography>
    </Box>
  );
};

export default Loading;
