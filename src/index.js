import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";

import { store } from "./features/store";

import { theme } from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
