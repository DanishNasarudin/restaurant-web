import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";

const Navbar = () => {
  return (
    <div className="restaurant__navbar">
      <div className="restaurant__navbar-links">
        <div className="restaurant__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="restaurant__navbar-links_container">
          <p>
            <a href="#orderonline">Order Online</a>
          </p>
          <p>
            <a href="#superhot">Super Hot</a>
          </p>
          <p>
            <a href="#socials">Socials</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
