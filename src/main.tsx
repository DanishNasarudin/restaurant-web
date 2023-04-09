import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StudioPage } from "./containers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studioPage" element={<StudioPage />} />
        <Route path="/studioPage/desk" element={<StudioPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
