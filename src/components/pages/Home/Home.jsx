import Header from "./Header";
import { Logo } from "../../../assets/Logo";
import Buttons from "../../Buttons";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div className="hero-wrapper">
        <Logo className="hero-logo"></Logo>
        <Header></Header>
        <div className="btn-grp">
          <Buttons>Contact Me</Buttons>
          <Buttons>Facebook</Buttons>
        </div>
      </div>
    </section>
  );
}

export default Home;
