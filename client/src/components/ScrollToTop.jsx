import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force the window to top
    window.scrollTo(0, 0);
    
    // 2. Optional: Disable browser's automatic scroll restoration to prevent fighting
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]); // Runs every time the route path changes

  return null;
};

export default ScrollToTop;