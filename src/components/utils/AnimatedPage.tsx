import App from "../../App";
import "../../index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Studio } from "../../containers";
import { Loading, Notfound, Post, ScrollToTop } from "../../components";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

const AnimatedPage = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/preview/*" element={<App />} />
          <Route path="/studio/*" element={<Studio />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/preview/post/:postId" element={<Post />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedPage;
