import React from "react";
// Will update width value to clamp();
const Card = ({ children, className = "card" }) => {
  return <div className={className}>{children}</div>;
};

export default Card;
