import React from "react";

const Buttons = ({ children, onClick, active = true }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      style={{
        cursor: "pointer",
        backgroundColor: !active && "transparent",
        color: active ? "var(--bg-clr)" : "var(--txt-clr",
      }}
    >
      {children}
    </button>
  );
};

export default Buttons;
