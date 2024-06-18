import React from "react";
import ReactDOM from "react-dom/client";
import Approuter from "./Routes/Approuter";
import "./root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>
);
