import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { initStorage } from "./utils/storage";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// later...
if (typeof serviceWorkerRegistration.register === "function") {
  serviceWorkerRegistration.register();
}

const show = (title, details) => {
  document.body.innerHTML = `
    <pre style="padding:12px;white-space:pre-wrap;font-family:monospace;">
${title}

${details}
    </pre>
  `;
};

window.addEventListener("error", (e) => {
  const stack = e?.error?.stack ? `\n\nSTACK:\n${e.error.stack}` : "";
  show(
    "JS Error:",
    `${e.message}\n\n${e.filename}:${e.lineno}:${e.colno}${stack}`
  );
});

window.addEventListener("unhandledrejection", (e) => {
  const reason = e?.reason;
  const msg =
    typeof reason === "object"
      ? JSON.stringify(reason, null, 2)
      : String(reason);
  const stack = reason?.stack ? `\n\nSTACK:\n${reason.stack}` : "";
  show("Promise Rejection:", `${msg}${stack}`);
});

// Initialize local storage
initStorage();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <HashRouter>
  <div style={{ padding: 16, fontFamily: "monospace" }}>
    App booted OK (App component not mounted)
  </div>
</HashRouter>
  </React.StrictMode>
);

// Disable service worker while debugging/deploying
serviceWorkerRegistration.register();