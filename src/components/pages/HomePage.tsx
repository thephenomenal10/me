import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TypewriterComponent from "typewriter-effect";

import developerSvg from "./../../assets/developer.svg";
import { primaryColor } from "../../constants/colors";

const HomePage = () => {
  const scrollToLowerSection = () => {
    const lowerSection = document.getElementById("lower-section");
    if (lowerSection) {
      lowerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    <Box>
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
          <Typography
            variant="h3"
            sx={{
              paddingTop: "1.5rem",
            }}
          >
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
          style={{ width: "35%", height: "35%" }}
        />
      </Box>
      <Box sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <IconButton sx={{ width: "40px" }} onClick={scrollToLowerSection}>
          <KeyboardArrowDownIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box
        id="lower-section"
        sx={{
          minHeight: "calc(100vh - 4rem)",
          height: "100%",
          paddingX: "5rem",
        }}
      >
        <Typography variant="h4" sx={{ letterSpacing: "2px" }}>
          LET ME{" "}
          <span style={{ color: primaryColor, fontWeight: "900" }}>
            INTRODUCE{" "}
          </span>
          MYSELF
        </Typography>
        <Divider
          sx={{
            color: primaryColor,
            flex: 1,
            width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
            borderColor: "unset",
            borderWidth: "1px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
