import App from "../../App";
import "../../index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { StudioPage } from "../../containers";
import { Notfound, Post, ScrollToTop } from "../../components";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedPage = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/preview/*" element={<App />} />
        <Route path="/studioPage/*" element={<StudioPage />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/preview/post/:postId" element={<Post />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPage;
