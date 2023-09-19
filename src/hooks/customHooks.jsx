import { useState, useEffect } from "react";
export const useVisibility = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
};

export const useThemeChanger = () => {
  const body = document.getElementById("root");
  let themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
  const [theme, setTheme] = useState(generateTheme());

  const toggleTheme = () => {
    setTheme(generateTheme());
  };

  function generateTheme() {
    let themeNo = Math.floor(Math.random() * themes.length);
    return themes[themeNo];
  }

  useEffect(() => {
    body.addEventListener("click", (e) => {
      const tag = e.target.tagName;
      const isValid =
        tag != "BUTTON" &&
        tag != "INPUT" &&
        tag != "TEXTAREA" &&
        e.target.parentElement.className != "card";
      isValid && toggleTheme();
    });

    return () => {
      body.removeEventListener("click", toggleTheme);
    };
  }, []);
  return theme;
};
