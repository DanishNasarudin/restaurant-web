import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StudioPage } from "./containers";
import { Notfound, Post, ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preview/*" element={<App />}></Route>
        <Route path="/studioPage" element={<StudioPage />}>
          <Route path="desk" element={<StudioPage />} />
          <Route path="desk/*" element={<StudioPage />} />
        </Route>
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/preview/post/:postId" element={<Post />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
