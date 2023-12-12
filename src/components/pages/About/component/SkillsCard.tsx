import { Box, Card, Chip, Divider, Typography } from "@mui/material";
import { TEXT_STYLES } from "../../../styles/textStyles";
import { offWhite, primaryColor } from "../../../../constants/colors";

const SkillsCard = () => {
  const skills = [
    { name: "C/C++", colorHexCode: "#42e7eb" },
    { name: "Javascript", colorHexCode: "#FFFF00" },
    { name: "Typescript", colorHexCode: "#007acc" },
    { name: "ReactJs", colorHexCode: "#61dafb" },
    { name: "CSS-FlexBox", colorHexCode: "#8dc891" },
    { name: "Flutter", colorHexCode: "#5288e3" },
    { name: "NodeJS", colorHexCode: "#3c873a" },
    { name: "NestJS", colorHexCode: "#cb3837" },
    { name: "MongoDB", colorHexCode: "#3c873a" },
    { name: "Redis", colorHexCode: "#3c873a" },
    { name: "MongoDB", colorHexCode: "#3c873a" },
    { name: "Bull queue", colorHexCode: "#cb3837" },
    { name: "MongoDB", colorHexCode: "#61dafb" },
    { name: "RabbitMQ", colorHexCode: "#61dafb" },
    { name: "Docker", colorHexCode: "#5288e3" },
    { name: "Kubectl", colorHexCode: "#61dafb" },
    { name: "Kubernetes", colorHexCode: "#047adc" },
    { name: "Git", colorHexCode: "#047adc" },
  ];

  const SkillChip = ({ skillName, colorCode }: { skillName: string; colorCode: string }) => {
    return (
      <Chip
        label={skillName}
        variant="outlined"
        sx={{ color: "white", fontSize: "16px", border: `1.5px solid ${colorCode}` }}
      />
    );
  };

  return (
    <Box sx={{ paddingTop: "3rem", paddingBottom: "1rem", display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          paddingX: "1rem",
          paddingY: "1rem",
          width: "55%",
          minWidth: "250px",
          backgroundColor: "transparent",
          border: "2px solid #42e7eb",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "15px",
          "&:hover": {
            boxShadow: "0 0 10px 3px rgba(66, 231, 235, 0.5)",
          },
        }}
      >
        <Box>
          <Typography sx={{ ...TEXT_STYLES.textDisplayH5, color: offWhite }}>Skills</Typography>
          <Divider
            sx={{
              color: primaryColor,
              width: { xs: "30px", sm: "40px", md: "40px", lg: "50px" },
              borderColor: "unset",
              borderWidth: "1px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills?.map((skill, i) => {
            return <SkillChip key={i} skillName={skill.name} colorCode={skill.colorHexCode} />;
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default SkillsCard;
