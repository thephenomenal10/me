import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

import { whiteColor } from "../../../../constants/colors";
import { TEXT_STYLES } from "../../../styles/textStyles";

const WorkSummary = ({ data }: { data: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "1rem", alignItems: "center", gap: "0.8rem" }}>
      <FontAwesomeIcon icon={faCircle} style={{ color: whiteColor }} />
      <Typography sx={{ ...TEXT_STYLES.textMicro }}>{data}</Typography>
    </Box>
  );
};

export default WorkSummary;
