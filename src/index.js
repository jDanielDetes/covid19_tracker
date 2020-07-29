import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import "./assets/scss/material-dashboard-pro-react.scss?v=1.9.0";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);
