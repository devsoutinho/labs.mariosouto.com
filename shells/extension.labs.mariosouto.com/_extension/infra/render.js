import ReactDOM from "react-dom/client";
export function render(Screen, rootName) {
  const rootId = "ds-root-" + rootName;
  document.body.insertAdjacentHTML("beforeend", `<div id='${rootId}'></div>`);
  const reactRoot = ReactDOM.createRoot(
    globalThis.document.getElementById(rootId)
  );
  reactRoot.render(Screen);
}
