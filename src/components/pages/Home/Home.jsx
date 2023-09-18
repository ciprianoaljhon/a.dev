import React from "react";
import Header from "./Header";
import { Logo } from "../../../assets/Logo";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div className="hero-wrapper">
        <Logo className="hero-logo"></Logo>
        <Header></Header>
      </div>
    </section>
  );
}

export default Home;
