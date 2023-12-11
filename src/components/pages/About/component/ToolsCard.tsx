import { Box, Card, Chip, Divider, Typography } from "@mui/material";

import { TEXT_STYLES } from "../../../styles/textStyles";
import { offWhite, primaryColor } from "../../../../constants/colors";

const ToolsCard = () => {
  const tools = [
    { name: "VS Code", colorHexCode: "#5288e3" },
    { name: "Postman", colorHexCode: "#fb7505" },
    { name: "Android Studio", colorHexCode: "#27b584" },
    { name: "Altair GraphQL", colorHexCode: "#61dafb" },
  ];

  const ToolChip = ({ toolName, colorCode }: { toolName: string; colorCode: string }) => {
    return (
      <Chip
        label={toolName}
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
          width: "35%",
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
          <Typography sx={{ ...TEXT_STYLES.textDisplayH5, color: offWhite }}>Tools I use</Typography>
          <Divider
            sx={{
              color: primaryColor,
              width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
              borderColor: "unset",
              borderWidth: "1px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {tools?.map((tool, i) => {
            return <ToolChip key={i} toolName={tool.name} colorCode={tool.colorHexCode} />;
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default ToolsCard;
