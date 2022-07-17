import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(sessionStorage.theme);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(theme);
    root.classList.remove(colorTheme);
    sessionStorage.setItem("theme", theme);
    // eslint-disable-next-line
  }, [setTheme, colorTheme]);

  return [setTheme, colorTheme];
};

export default useDarkMode;
