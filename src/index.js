import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
