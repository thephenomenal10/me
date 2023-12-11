import React from "react";
import { ThemeProvider } from "@mui/material";

import { appTheme } from "./theme/theme";
import ParticleBackground from "./components/common/ParticleBackground";
import Router from "./routers";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ParticleBackground />
      <Router />
    </ThemeProvider>
  );
}

export default App;
