import React from "react";

let tagLine = "Turn your ideas, into Reality.";
let sub =
  "Coding your dreams into reality: Where Imagination becomes lines of code and Ideas Spring to Life!";
let key = 0;
let elements = tagLine.split("").map((char) => <span key={key++}>{char}</span>);
function Header() {
  return (
    <>
      <h1 id="tag-line">{elements}</h1>
      <p>{sub}</p>
    </>
  );
}

export default Header;
