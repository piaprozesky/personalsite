import React from "react";
import "./NavBar.css";
import HomeView from "../views/HomeView";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navitem">
        <a className="navtext" href="#home">
          Home
        </a>
      </div>

      <div className="navitem">
        <a className="navtext" href="#about">
          About
        </a>
      </div>

      <div className="navitem">
        <a className="navtext" href="#projects">
          Projects
        </a>
      </div>

      <div className="navitem">
        <a className="navtext" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
