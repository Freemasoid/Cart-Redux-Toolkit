import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { store } from "./Store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container); // instead react.dom.render

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
