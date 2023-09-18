import React, { useEffect, useState, useRef } from "react";
import NavItems from "./NavItems";
import "./nav.css";
import Buttons from "../../Buttons";
import { Logo } from "../../../assets/Logo";
import { useVisibility } from "../../../hooks/customHooks";
import { List, X } from "phosphor-react";
const docSize = document.getElementById("root").clientWidth;

const Navbar = () => {
  const [visible, setVisible] = useVisibility();
  console.log("Navbar renders");
  return (
    <nav style={{ height: visible && "25rem" }}>
      <div className="nav-wrapper">
        <Logo></Logo>
        <Buttons onClick={setVisible}>
          {!visible ? <List size={32}></List> : <X size={32}></X>}
        </Buttons>
      </div>
      <NavItems visible={visible}></NavItems>
    </nav>
  );
};

export default Navbar;
