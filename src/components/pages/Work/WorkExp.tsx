import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Timeline, timelineItemClasses } from "@mui/lab";

import { primaryColor } from "../../../constants/colors";
import { TEXT_STYLES } from "../../styles/textStyles";
import TimelineItem from "./component/TimelineItem";
import { RED_POSITIVE_TECH_EXP, WORK_EXP_RIKTAM, WORK_EXP_RIKTAM_INTERN } from "../../../constants/constants";
import Footer from "../../common/Footer";

const WorkExp = () => {
  return (
    <Box
      sx={{
        paddingTop: "4rem",
        minHeight: "calc(100vh - 4rem)",
        paddingX: { xs: "1rem", sm: "1.5rem", md: "2.5rem", lg: "5rem" },
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ ...TEXT_STYLES.textDisplayH5, letterSpacing: "2px", paddingTop: "3rem", alignSelf: "flex-start" }}
      >
        Work <span style={{ color: primaryColor, fontWeight: "900" }}>Experience </span>
        🧑🏻‍💻
      </Typography>
      <Divider
        sx={{
          color: primaryColor,
          alignSelf: "flex-start",
          width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
          borderColor: "unset",
          borderWidth: "1px",
        }}
      />
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem
          title={WORK_EXP_RIKTAM?.title}
          organization={WORK_EXP_RIKTAM?.organization}
          timePeriod={WORK_EXP_RIKTAM?.timePeriod}
          summary={WORK_EXP_RIKTAM?.summary}
        />
        <TimelineItem
          title={WORK_EXP_RIKTAM_INTERN?.title}
          organization={WORK_EXP_RIKTAM_INTERN?.organization}
          timePeriod={WORK_EXP_RIKTAM_INTERN?.timePeriod}
          summary={WORK_EXP_RIKTAM_INTERN?.summary}
        />
        <TimelineItem
          title={RED_POSITIVE_TECH_EXP?.title}
          organization={RED_POSITIVE_TECH_EXP?.organization}
          timePeriod={RED_POSITIVE_TECH_EXP?.timePeriod}
          summary={RED_POSITIVE_TECH_EXP?.summary}
        />
      </Timeline>
      <Footer />
    </Box>
  );
};

export default WorkExp;
