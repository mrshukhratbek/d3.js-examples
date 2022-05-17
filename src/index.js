// @react
import React from "react";
import ReactDOM from "react-dom/client";
// @app
import { App } from "./app.component";
// @provider
import { BrowserRouter as Router } from "react-router-dom";
import { CentredProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CentredProvider>
    <Router>
      <App />
    </Router>
  </CentredProvider>
);
