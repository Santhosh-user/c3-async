import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import { AuthAccProvider } from "./components/AuthAcc";


ReactDOM.render(
  <React.StrictMode>
    <AuthAccProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </AuthAccProvider>
  </React.StrictMode>,
  document.getElementById("root")
);