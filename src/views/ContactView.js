import React from "react";
import "./ContactView.css";

function ContactView() {
  return (
    <div id="contact">
      <div className="contactview">
        <h1 className="contact">Contact Me</h1>
        <p className="text">pianichelle@gmail.com</p>
        <a className="text" href="http://www.linkedin.com/in/pia-prozesky">
          LinkedIn
        </a>
        <br />
        <br />
        <a className="text" href="https://github.com/piaprozesky">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactView;
