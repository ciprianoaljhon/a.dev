import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import "./global.css";
import "./App.css";
import { useThemeChanger } from "./hooks/customHooks";
import About from "./components/pages/About/About.jsx";
import Navbar from "./components/pages/Navigation/Navbar.jsx";

const App = () => {
  console.log("renders");

  const theme = useThemeChanger();
  //create a react memo for unnecessary render
  return (
    <div id="main-container" data-theme={theme}>
      {/* <Navbar></Navbar> */}

      <div className="pg-container">
        <Home></Home>
        <Projects></Projects>
        {/* <About></About> */}
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
