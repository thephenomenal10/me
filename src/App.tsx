import React from "react";
import { ThemeProvider } from "@mui/material";

import { appTheme } from "./theme/theme";
import ParticleBackground from "./components/common/ParticleBackground";
import NavBar from "./components/common/NavBar";
import Router from "./routers";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ParticleBackground />
      <NavBar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
