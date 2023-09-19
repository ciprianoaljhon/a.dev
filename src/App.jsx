import React, { createContext, useState, useEffect } from "react";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/pages/Navigation/Navbar.jsx";
import "./global.css";
import "./App.css";

const App = () => {
  console.log("renders");

  // put the code below in ThemeContext file
  //create a react memo for unnecessary render
  const [theme, setTheme] = useState("theme-2");
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    const clickHandler = () => {
      setTheme((prevTheme) => (prevTheme === "theme-2" ? "" : "theme-2"));
    };

    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="pg-container" data-theme={theme}>
        <Home></Home>
        <Projects></Projects>
        {/* <About></About> */}
        <Contact></Contact>
      </div>
    </>
  );
};

export default App;
