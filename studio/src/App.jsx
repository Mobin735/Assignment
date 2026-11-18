import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Instagram from "./pages/Instagram";
import Post from "./pages/Post";
import Missing from "./pages/Missing";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/instagram/:photoId" element={<Post />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  );
}
