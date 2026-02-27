import React from "react";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Kavita Phogat</h2>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;