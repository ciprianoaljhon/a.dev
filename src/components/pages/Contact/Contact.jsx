import { useMediaQuery } from "react-responsive";
import { useVisibility } from "../../../hooks/customHooks";
import About from "../About/About";
import Form from "../../Form";
import Card from "../../Card";
import ContactList from "./ContactList";
import Buttons from "../../Buttons";
import "./contact.css";

function Contact() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [active, setActive] = useVisibility(false, "Contact Me");
  return (
    <section id="contact">
      {isMobile ? (
        <Card>
          <div className="tab">
            <Buttons active={active} onClick={setActive}>
              Contact Me
            </Buttons>
            <Buttons active={!active} onClick={setActive}>
              About Me
            </Buttons>
          </div>
          {active ? (
            <>
              <Form></Form>
              <hr />
              <ContactList></ContactList>
            </>
          ) : (
            <About></About>
          )}
        </Card>
      ) : (
        <>
          <Card>
            <h2>Contact Me</h2>
            <Form></Form>
            <hr />
            <ContactList></ContactList>
          </Card>
          <Card>
            <h2>About Me</h2>
            <About></About>
          </Card>
        </>
      )}
    </section>
  );
}

export default Contact;
