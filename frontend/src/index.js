window.addEventListener("error", (e) => {
  document.body.innerHTML =
    `<pre style="padding:12px;white-space:pre-wrap;font-family:monospace;">` +
    `JS Error:\n${e.message}\n\n${e.filename}:${e.lineno}:${e.colno}` +
    `</pre>`;
});

window.addEventListener("unhandledrejection", (e) => {
  document.body.innerHTML =
    `<pre style="padding:12px;white-space:pre-wrap;font-family:monospace;">` +
    `Promise Rejection:\n${String(e.reason)}` +
    `</pre>`;
});

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initStorage } from "./utils/storage";

initStorage();

// PWA service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker (offline + installable)
serviceWorkerRegistration.register();
