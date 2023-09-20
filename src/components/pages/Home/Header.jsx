import React, { useEffect, useState } from "react";

let tagLine = "Turn your ideas, into Reality.";
let sub =
  "Coding your dreams into reality: Where Imagination becomes lines of code and Ideas Spring to Life!";
let key = 0;
let elements = tagLine.split("").map((char) => <span key={key++}>{char}</span>);
function Header() {
  const [tagLine, setTagLine] = useState("");
  const [paragraph, setParagraph] = useState("");
  useEffect(() => {
    for (let i = 0; i < sub.length; i++) {
      setTimeout(() => {
        setParagraph((prev) => prev + sub.charAt(i));
      }, 5 * i);
    }
  }, []);

  return (
    <>
      <h1 id="tag-line">{elements}</h1>
      <p>{paragraph}</p>
    </>
  );
}

export default Header;
