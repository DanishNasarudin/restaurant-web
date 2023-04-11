import { useState } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";
import Button from "../button/Button";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

interface ClickProps {
  handleClick: (message: boolean) => void;
}

const Menu: React.FC<ClickProps> = ({ handleClick }) => {
  const [click, setClick] = useState(false);

  const toggleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }

    handleClick(click);
  };

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
          onClick={toggleClick}
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
          onClick={toggleClick}
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
          onClick={toggleClick}
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
          onClick={toggleClick}
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

  const handleClick = (message: boolean) => {
    setToggleMenu(message);
  };

  return (
    <div className="restaurant__navbar">
      <div className="restaurant__navbar-links">
        <div className="restaurant__navbar-links_logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="restaurant__navbar-links_container">
          <Menu handleClick={handleClick} />
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
                <Menu handleClick={handleClick} />
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
