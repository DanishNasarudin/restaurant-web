import React from "react";
import ReactDOM from "react-dom/client";
import { AnimatedPage, ScrollToTop } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <AnimatedPage />
    </Router>
  </React.StrictMode>
);
