import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StudioPage } from "./containers";
import { Post, ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studioPage">
          <Route path="desk" element={<StudioPage />} />
          <Route path="desk/*" element={<StudioPage />} />
        </Route>
        <Route path="/post">
          <Route path=":postId" element={<Post />} />
          <Route path="*" element={<App />} />
        </Route>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
