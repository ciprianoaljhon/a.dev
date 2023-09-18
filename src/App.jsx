import React from "react";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/pages/Navigation/Navbar.jsx";
import "./global.css";
import "./App.css";

const App = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="pg-container">
        <Home></Home>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
};

export default App;
