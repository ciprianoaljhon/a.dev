import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";
import List from "../../List";
const ContactList = () => {
  return (
    <div className="list-wrapper">
      <List>
        <a href="">
          <BiLogoFacebookCircle></BiLogoFacebookCircle>
        </a>
        <a href="">
          <BiLogoGithub></BiLogoGithub>
        </a>
        <a href="">
          <BiLogoGmail></BiLogoGmail>
        </a>
      </List>
    </div>
  );
};

export default ContactList;
