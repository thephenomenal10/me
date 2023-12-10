import React from "react";
import { Box, Typography } from "@mui/material";
import developerSvg from "./../../assets/developer.svg";
import TypewriterComponent from "typewriter-effect";
import { primaryColor } from "../../constants/colors";

const HomePage = () => {
  const roles = (
    <TypewriterComponent
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Flutter Developer",
        ],
        autoStart: true,
        loop: true,
        cursor: "🖊",
        deleteSpeed: 50,
      }}
    />
  );

  return (
    <Box
      sx={{
        paddingTop: "4rem",
        minHeight: "calc(100vh - 4rem)",
        paddingX: "5rem",
        // bgcolor: "red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ letterSpacing: "1px" }}>
          Hello World! 👋🏻
        </Typography>
        <Typography variant="h3" sx={{ paddingTop: "2rem" }}>
          I'M <span style={{ color: primaryColor }}>SAHYOG SAINI</span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "3.5rem",
            letterSpacing: "1px",
            color: primaryColor,
          }}
        >
          {roles}
        </Typography>
      </Box>
      <img
        src={developerSvg}
        alt="Background"
        style={{ width: "32%", height: "32%" }}
      />
    </Box>
  );
};

export default HomePage;
