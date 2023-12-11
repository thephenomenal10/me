import React from "react";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import developerSvg from "./../../../assets/developer.svg";
import me from "./../../../assets/me.jpeg";
import { primaryColor } from "../../../constants/colors";
import SocialButton from "./component/SocialButton";
import Footer from "../../common/Footer";
import { TEXT_STYLES } from "../../styles/textStyles";

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
        strings: ["Software Developer", "Freelancer", "MERN Stack Developer", "Flutter Developer"],
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
          paddingX: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "5rem" },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          "@media (max-width:600px)": {
            justifyContent: "space-evenly",
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Typography sx={{ ...TEXT_STYLES.textDisplayH2 }}>Hello World! 👋🏻</Typography>
          <Typography
            sx={{
              ...TEXT_STYLES.textDisplayH3,
              paddingTop: { xs: "1rem", sm: "0.5rem", md: "1rem", lg: "1.5rem" },
            }}
          >
            I'M <span style={{ color: primaryColor }}>{"<SAHYOG SAINI/>"}</span>
          </Typography>
          <Typography
            sx={{
              ...TEXT_STYLES.textDisplayH4,
              paddingTop: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              color: primaryColor,
            }}
          >
            {roles}
          </Typography>
        </Box>
        <img src={developerSvg} alt="Background" style={{ width: "35%", height: "35%", minWidth: "250px" }} />
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
          paddingX: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "5rem" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <>
          <Typography sx={{ ...TEXT_STYLES.textDisplayH5, letterSpacing: "2px" }}>
            LET ME <span style={{ color: primaryColor, fontWeight: "900" }}>INTRODUCE </span>
            MYSELF
          </Typography>
          <Divider
            sx={{
              color: primaryColor,
              width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
              borderColor: "unset",
              borderWidth: "1px",
            }}
          />
        </>
        <Box
          sx={{
            display: "flex",
            paddingTop: "3rem",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: "1rem", sm: "3rem", md: "7rem", lg: "10rem" },
            "@media (max-width:600px)": {
              justifyContent: "space-evenly",
              flexDirection: "column-reverse",
            },
          }}
        >
          <Typography sx={{ ...TEXT_STYLES.textDisplayH6 }}>
            💻 A versatile Full-stack developer passionate about crafting with{" "}
            <span style={{ color: primaryColor }}> JS and Flutter.</span>
            <br /> Constantly refining skills for the next level. Solving{" "}
            <span style={{ color: primaryColor }}>real-world </span>
            problems through code is my forte. <br /> Off-screen, you'll find me exploring new places. Let's build,
            innovate, and journey together! 🚀🚀
          </Typography>
          <Tilt>
            <Avatar
              src={me}
              sx={{
                height: { xs: "10rem", sm: "13rem", md: "15rem", lg: "18.75rem" },
                width: { xs: "10rem", sm: "13rem", md: "15rem", lg: "18.75rem" },
              }}
            />
          </Tilt>
        </Box>
        <Box sx={{ paddingTop: "3rem" }}>
          <Typography sx={{ ...TEXT_STYLES.textDisplayH5 }}>
            FEEL FREE TO
            <span style={{ color: primaryColor, fontWeight: "900" }}> CONNECT</span>
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
          <SocialButton />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
