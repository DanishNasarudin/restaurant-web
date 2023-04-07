import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";
import Button from "../button/Button";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#superhot">Super Hot</a>
      </p>
      <p>
        <a href="#socials">Socials</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

interface NavbarProps {
  toggleButton: boolean;
}

const Navbar = ({ toggleButton }: NavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="restaurant__navbar">
      <div className="restaurant__navbar-links">
        <div className="restaurant__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="restaurant__navbar-links_container">
          {/* <p>
            <Button links="#onlineorder" text="Order Now" />
          </p> */}
          <Menu />
          <p>
            {toggleButton ? (
              <a href="#ordernow">Order Now</a>
            ) : (
              <Button links="#onlineorder" text="Order Now" />
            )}
          </p>
        </div>
        <div className="restaurant__navbar-menu">
          {/* <Button links="#onlineorder" text="Online Order" /> */}
          {toggleMenu ? (
            <RiCloseLine
              color="#000000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color="#000000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="restaurant__navbar-menu_container">
              <div className="restaurant__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
