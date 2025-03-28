import { useEffect, useState, useCallback } from "react";

const useDarkMode = () => {
  // Get theme from localStorage or default to null
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  // Apply the theme on mount
  useEffect(() => {
    if (theme) {
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    if (theme === "light-mode") {
      setTheme("");
      localStorage.removeItem("theme");
      document.body.classList.remove("light-mode");
    } else {
      setTheme("light-mode");
      localStorage.setItem("theme", "light-mode");
      document.body.classList.add("light-mode");
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export default useDarkMode;
