import React from "react";
import ReactDOM from "react-dom/client";

export function render(Screen: React.ReactNode, rootName: string) {
  const rootId = "ds-root-" + rootName;
  document.body.insertAdjacentHTML("beforeend", `<div id='${rootId}'></div>`);
  const reactRoot = ReactDOM.createRoot(
    globalThis.document.getElementById(rootId) as HTMLElement
  );
  reactRoot.render(Screen);
}
