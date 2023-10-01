import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMysql, DiPython } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import List from "../../List";

const TechStack = () => {
  return (
    <div className="list-wrapper">
      <h4>Tech Stack</h4>
      <List>
        <FaHtml5></FaHtml5>
        <FaCss3Alt></FaCss3Alt>
        <FaJs></FaJs>
        <BiLogoTailwindCss></BiLogoTailwindCss>
        <FaReact></FaReact>
        <FaJava></FaJava>
        <DiMysql></DiMysql>
        <DiPython></DiPython>
        <FaNodeJs></FaNodeJs>
        <SiExpress></SiExpress>
      </List>
    </div>
  );
};

export default TechStack;
