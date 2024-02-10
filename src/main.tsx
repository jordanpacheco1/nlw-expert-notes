import "./index.css";

import { App } from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>
);
