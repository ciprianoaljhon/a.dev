import { IconContext, House, Book, User, EnvelopeSimple } from "phosphor-react";

function NavItems({ visible }) {
  const scrollTo = () => {};

  return (
    <>
      <IconContext.Provider
        value={{
          color: "white",
          size: 32,
          weight: "light",
          mirrored: false,
        }}
      >
        <ul className="nav-list">
          <li
            style={{
              "--delay": ".1s",
              transform: visible && "translateX(0px)",
              transitionDelay: !visible && "0s",
            }}
          >
            <House onClick={() => scrollTo()}></House>
          </li>
          <li
            style={{
              "--delay": ".2s",
              transform: visible && "translateX(0px)",
            }}
          >
            <Book onClick={() => scrollTo()}></Book>
          </li>
          <li
            style={{
              "--delay": ".3s",
              transform: visible && "translateX(0px)",
            }}
          >
            <User onClick={() => scrollTo()}></User>
          </li>
          <li
            style={{
              "--delay": ".4s",
              transform: visible && "translateX(0px)",
            }}
          >
            <EnvelopeSimple onClick={() => scrollTo()}></EnvelopeSimple>
          </li>
        </ul>
      </IconContext.Provider>
    </>
  );
}

export default NavItems;
