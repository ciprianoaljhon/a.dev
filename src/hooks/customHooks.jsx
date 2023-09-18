import { useState } from "react";
export const useVisibility = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
};
