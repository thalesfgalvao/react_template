import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { Routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
