import React from "react";
import ReactDOM from "react-dom/client"; // Notice the change here
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root

root.render(
  <BrowserRouter basename="/Cleaning_web">
    <App />
  </BrowserRouter>
);
