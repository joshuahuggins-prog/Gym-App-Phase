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

// Optional: show runtime errors on-screen (temporary for debugging)
// Remove these listeners once the app loads normally.
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

// Initialize local storage
initStorage();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Disable service worker while debugging/deploying
serviceWorkerRegistration.register();