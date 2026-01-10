import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { initStorage } from "./utils/storage";

// PWA service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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

// Register service worker (offline + installable)
serviceWorkerRegistration.register();
