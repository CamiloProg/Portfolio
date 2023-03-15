import React from "react";
import "./NavBar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#about">About me</a>
          </li>
          <li className="navbar__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
