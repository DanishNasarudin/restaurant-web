import { useState } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { MenuLinkToId, useBasePath } from "..";

interface ClickProps {
  handleClick: (message: boolean) => void;
  BooleanArray: {
    toggleButton: boolean;
    features: boolean;
    offers: boolean;
    socials: boolean;
    contacts: boolean;
  };
}

const Menu = ({ handleClick, BooleanArray }: ClickProps) => {
  const { features, offers, socials, contacts } = BooleanArray;

  const [click, setClick] = useState(false);
  // This function is for closing the mobile navbar dropdown when a link is clicked.
  const toggleClick = () => {
    !setClick;
    handleClick(click);
  };

  return (
    <>
      <MenuLinkToId
        id_inView={features}
        id_name={"hot"}
        link_name={"Super Hot"}
        onClick={toggleClick}
      />
      <MenuLinkToId
        id_inView={offers}
        id_name={"offers"}
        link_name={"Offers"}
        onClick={toggleClick}
      />
      <MenuLinkToId
        id_inView={socials}
        id_name={"socials"}
        link_name={"Socials"}
        onClick={toggleClick}
      />
      <MenuLinkToId
        id_inView={contacts}
        id_name={"contacts"}
        link_name={"Contacts"}
        onClick={toggleClick}
      />
    </>
  );
};

interface NavbarProps {
  BooleanArray: {
    toggleButton: boolean;
    features: boolean;
    offers: boolean;
    socials: boolean;
    contacts: boolean;
  };
}

const Navbar = ({ BooleanArray }: NavbarProps) => {
  const { toggleButton } = BooleanArray;
  const basePath = useBasePath();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (message: boolean) => {
    setToggleMenu(message);
  };

  return (
    <div className="restaurant__navbar">
      <div className="restaurant__navbar-links">
        <div className="restaurant__navbar-links_logo">
          <Link to={basePath}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="restaurant__navbar-links_container">
          <Menu handleClick={handleClick} BooleanArray={BooleanArray} />
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
                <Menu handleClick={handleClick} BooleanArray={BooleanArray} />
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
