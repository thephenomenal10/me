import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, Divider } from "@mui/material";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { primaryColor } from "../../../../constants/colors";
import { TEXT_STYLES } from "../../../styles/textStyles";
import WorkSummary from "./WorkSummary";

const TimelineItem = ({
  title,
  timePeriod,
  organization,
  summary,
}: {
  title: string;
  timePeriod: string;
  organization: string;
  summary?: string[];
}) => {
  return (
    <MuiTimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: "white" }}>
          <FontAwesomeIcon icon={faBriefcase} style={{ color: primaryColor }} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ display: "flex", flexDirection: "column", flexWrap: "true" }}>
        <Typography sx={{ ...TEXT_STYLES.textDisplayH5, textAlign: "left" }}>{title}</Typography>
        <Typography sx={{ ...TEXT_STYLES.textDisplayH6, textAlign: "left", color: "grey" }}>{timePeriod}</Typography>
        <Divider
          sx={{
            color: primaryColor,
            alignSelf: "flex-start",
            width: { xs: "30px", sm: "70px", md: "100px", lg: "130px" },
            borderColor: "unset",
            borderWidth: "1px",
          }}
        />
        <Typography sx={{ ...TEXT_STYLES.textDisplayH6, textAlign: "left", color: primaryColor, paddingTop: "1rem" }}>
          {organization}
        </Typography>
        {summary?.map((data, i) => {
          return <WorkSummary key={i} data={data} />;
        })}
      </TimelineContent>
    </MuiTimelineItem>
  );
};

export default TimelineItem;
