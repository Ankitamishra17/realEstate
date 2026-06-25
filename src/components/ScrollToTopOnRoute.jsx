import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to top whenever the route changes.
// Renders nothing — just place it inside <Router>, above <Routes>.
export default function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}