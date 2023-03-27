import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ThemeProvider theme={darkTheme}>
    <App />
=======
    <ThemeProvider theme={lightTheme}>
      <App />
>>>>>>> dc8d0e90a64fcaf4340539ac66e5204e16ff5f72
    </ThemeProvider>
  </React.StrictMode>
);
