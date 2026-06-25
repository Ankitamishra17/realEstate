import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating "back to top" button. Shows after the user scrolls past 400px.
// Place it once inside your layout (e.g. App.jsx) so it shows on every page.
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "#b8892e",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(18,36,61,0.35)",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease, background 0.25s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#a37a28")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#b8892e")}
    >
      <ArrowUp style={{ width: 20, height: 20, color: "#fff" }} />
    </button>
  );
}