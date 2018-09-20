import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SetUpRouter from "./set-up-router";
import RoutersNRoutes from "./routers-n-routes";
import RoutePropNUrlPara from "./route-propert-url-para";
import Links from "./links";
import NavLinks from "./navlinks";
import Switches from "./switches";
import Redirects from "./redirects";
import Prompts from "./prompts";

const rootElement = document.getElementById("root");
ReactDOM.render(<Prompts />, rootElement);
