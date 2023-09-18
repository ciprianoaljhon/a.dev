import React from "react";
import Buttons from "./Buttons";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form action="">
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea
        cols="30"
        rows="10"
        placeholder="Type your message here..."
      ></textarea>
      <Buttons onClick={handleSubmit}>Submit</Buttons>
    </form>
  );
};

export default Form;
