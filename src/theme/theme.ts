import { createTheme } from "@mui/material";
import { offWhite, primaryColor, primaryDarkColor, primaryLightColor, whiteColor } from "../constants/colors";
import { Theme } from "@emotion/react";
import "@fontsource/poppins";

export const appTheme: Theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: primaryLightColor,
      dark: primaryDarkColor,
      contrastText: whiteColor,
    },
    background: {
      default: whiteColor,
      paper: offWhite,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    allVariants: {
      color: "white",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
