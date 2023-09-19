import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMysql, DiPython } from "react-icons/di";

const TechStack = () => {
  return (
    <div className="tech-stack-wrapper">
      <h4>Tech Stack</h4>
      <ul id="tech-list">
        <FaHtml5></FaHtml5>
        <FaCss3Alt></FaCss3Alt>
        <FaJs></FaJs>
        <BiLogoTailwindCss></BiLogoTailwindCss>
        <FaReact></FaReact>
        <FaJava></FaJava>
        <DiMysql></DiMysql>
        <DiPython></DiPython>
      </ul>
    </div>
  );
};

export default TechStack;
