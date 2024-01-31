import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./containers"; // Import the 'App' component from the appropriate file
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
