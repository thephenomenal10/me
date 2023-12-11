import { Box, Divider, Typography } from "@mui/material";

import coderSvg from "./../../../assets/coder.svg";
import { TEXT_STYLES } from "../../styles/textStyles";
import { primaryColor } from "../../../constants/colors";
import SkillsCard from "./component/SkillsCard";
import ToolsCard from "./component/ToolsCard";
import Footer from "../../common/Footer";

const AboutMePage = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: "4rem",
          minHeight: "calc(100vh - 4rem)",
          paddingX: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "5rem" },
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ ...TEXT_STYLES.textDisplayH5, letterSpacing: "2px" }}>
          Know Who <span style={{ color: primaryColor, fontWeight: "900" }}>I'M </span>
          🧑🏻‍💻
        </Typography>
        <Divider
          sx={{
            color: primaryColor,
            width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
            borderColor: "unset",
            borderWidth: "1px",
          }}
        />
        <Box
          sx={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            "@media (max-width:600px)": {
              justifyContent: "space-evenly",
              flexDirection: "column",
            },
          }}
        >
          <Typography sx={{ ...TEXT_STYLES.textDisplayH6, flex: 1 }}>
            Experienced Software Engineer with <span style={{ color: primaryColor }}>over 2.5 years</span> of expertise
            in Node.js, React.js, Redux, TypeScript, MongoDB, Nest.js framework, Flutter and C/C++. Proven commitment to
            <span style={{ color: primaryColor }}> writing clean and efficient code that is easily maintainable</span>,
            with a focus on delivering high-quality software solutions. Always eager to learn and apply new technologies
            to solve real-world problems. Thrives in collaborative environments and is ready to bring my technical
            skills and passion for continuous learning to contribute to{" "}
            <span style={{ color: primaryColor }}> impactful</span> software projects.
          </Typography>
          <img src={coderSvg} alt="code" style={{ width: "35%", height: "35%", minWidth: "250px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          paddingX: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "5rem" },
        }}
      >
        <Typography sx={{ ...TEXT_STYLES.textDisplayH5, letterSpacing: "2px" }}>
          Professional <span style={{ color: primaryColor, fontWeight: "900" }}>SkillSet</span>
        </Typography>
        <Divider
          sx={{
            color: primaryColor,
            width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
            borderColor: "unset",
            borderWidth: "1px",
          }}
        />
        <SkillsCard />
        <ToolsCard />
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutMePage;
