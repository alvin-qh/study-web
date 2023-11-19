/* @refresh reload */
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.scss";

import { Router } from "@solidjs/router";
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

render(() => (
  <Router>
    <App />
  </Router>
), root!);
