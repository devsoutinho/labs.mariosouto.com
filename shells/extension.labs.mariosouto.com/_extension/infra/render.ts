import React from "react";
import ReactDOM from "react-dom/client";

export function render(Screen: React.ReactNode, rootName: string) {
  const rootId = "nu-root-" + rootName;
  document.body.insertAdjacentHTML("beforeend", `<div id='${rootId}'></div>`);
  const reactRoot = ReactDOM.createRoot(document.getElementById(rootId));
  reactRoot.render(Screen);
}