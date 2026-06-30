import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import App from "./App";

createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
