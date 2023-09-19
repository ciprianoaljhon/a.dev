import React from "react";
import About from "../About/About";
import Form from "../../Form";
import Card from "../../Card";
import "./contact.css";
function Contact() {
  return (
    <section id="contact">
      <Card>
        <h2>Contact Me</h2>
        <Form></Form>
      </Card>
      <Card>
        <About></About>
      </Card>
    </section>
  );
}

export default Contact;
