import React from "react";
import { render } from "./infra/render";
import Screen from "../src/screens/HomeScreen/HomeScreen";

console.log("[Nu] Popup Script!");

render(<Screen />, "popup");