import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import App from "./App";
import store from "./store";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#4a148c",
    },
    input: {
      color: "white",
    },
  },
});

render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
