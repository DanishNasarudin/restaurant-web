import { useState } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";
import Button from "../button/Button";
import { Link as LinkScroll } from "react-scroll";

const Menu = () => {
  return (
    <>
      <div className="links_container-style">
        <LinkScroll
          activeClass="activeNavLink"
          to="hot"
          spy={true}
          smooth={true}
          offset={-120}
          duration={100}
        >
          Super Hot
        </LinkScroll>
        {/* <a href="#superhot">Super Hot</a> */}
      </div>
      <div className="links_container-style">
        <LinkScroll
          activeClass="activeNavLink"
          to="offers"
          spy={true}
          smooth={true}
          offset={-120}
          duration={100}
        >
          Offers
        </LinkScroll>
        {/* <a href="#socials">Socials</a> */}
      </div>
      <div className="links_container-style">
        <LinkScroll
          activeClass="activeNavLink"
          to="socials"
          spy={true}
          smooth={true}
          offset={-120}
          duration={100}
        >
          Socials
        </LinkScroll>
      </div>
      <div className="links_container-style">
        <LinkScroll
          activeClass="activeNavLink"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-120}
          duration={100}
        >
          Contacts
        </LinkScroll>
      </div>
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
          <Menu />
          <div className="links_container-style">
            {toggleButton ? (
              <a href="#ordernow">Order Now</a>
            ) : (
              <Button links="#onlineorder" text="Order Now" />
            )}
          </div>
        </div>
        <div className="restaurant__navbar-menu">
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
      <div className="restaurant__navbar-menu_button">
        {toggleButton ? (
          <a href="#" style={{ display: "none" }}>
            Order Now
          </a>
        ) : (
          <Button links="#onlineorder" text="Order Now" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
