// @react
import React from "react";
import ReactDOM from "react-dom/client";
// @app
import { App } from "./app.component";
// @provider
import { CentredProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CentredProvider>
    <App />
  </CentredProvider>
);
