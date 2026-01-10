import { useEffect, useState } from "react";
import "../styles/scroll-to-top-button.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top-btn ${visible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      <i class="bx bx-arrow-to-top"></i>
    </button>
  );
}
