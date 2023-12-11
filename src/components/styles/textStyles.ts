import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export interface IGlobalTextStyles {
  // Text Styles for Different Variations of Text
  textDisplayH1: SxProps<Theme> | undefined;
  textDisplayH2: SxProps<Theme> | undefined;
  textDisplayH3: SxProps<Theme> | undefined;
  textDisplayH4: SxProps<Theme> | undefined;
  textDisplayH5: SxProps<Theme> | undefined;
  textDisplayH6: SxProps<Theme> | undefined;
  textMicro: SxProps<Theme> | undefined;
}

export const TEXT_STYLES: IGlobalTextStyles = {
  textDisplayH1: {
    fontSize: "4rem",
    fontWeight: 700,
    lineHeight: "2.75rem",
    letterSpacing: "1px",
  },
  textDisplayH2: {
    fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.2rem", lg: "3.75rem" },
    fontWeight: 400,
    lineHeight: { xs: "2.5rem", sm: "2.5rem", md: "2.5rem", lg: "2.5rem" },
    letterSpacing: "1px",
  },
  textDisplayH3: {
    fontSize: { xs: "2.1rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    fontWeight: 400,
    lineHeight: { xs: "2.2rem", sm: "2.5rem", md: "2.5rem", lg: "2.5rem" },
    letterSpacing: "0.5px",
  },
  textDisplayH4: {
    fontSize: { xs: "1.6rem", sm: "1.8rem", md: "1.8rem", lg: "2.125rem" },
    fontWeight: 400,
    lineHeight: { xs: "1.9rem", sm: "2.5rem", md: "2.5rem", lg: "2.5rem" },
    letterSpacing: "0.5px",
  },
  textDisplayH5: {
    fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.4rem", lg: "1.5rem" },
    fontWeight: 400,
    lineHeight: "1.3rem",
    letterSpacing: "2px",
  },
  textDisplayH6: {
    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1.2rem", lg: "1.2rem" },
    fontWeight: 400,
    lineHeight: { xs: "1.4rem", sm: "1.6rem", md: "2.0rem", lg: "2.2rem" },
    letterSpacing: { sm: "1px", md: "1.1px", lg: "1.1px" },
  },
  textMicro: {
    fontSize: { xs: "0.2rem", sm: "0.3rem", md: "0.5rem", lg: "0.6rem" },
    fontWeight: 400,
    lineHeight: "0.813rem",
    letterSpacing: "0.25px",
  },
};
