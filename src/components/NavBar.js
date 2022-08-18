import React from "react";
import "./NavBar.css";
import HomeView from "../views/HomeView";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navitem">Home</div>

      <div className="navitem">About</div>

      <div className="navitem">Projects</div>

      <div className="navitem">Contact</div>
    </div>
  );
}

export default Navbar;
