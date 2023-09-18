import React from "react";

const Buttons = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </button>
  );
};

export default Buttons;
