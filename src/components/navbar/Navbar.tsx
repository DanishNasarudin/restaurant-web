import { useState } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/MatRock-logo.svg";
import Button from "../button/Button";
import { scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBasePath } from "../utils/useBasePath";

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
  const basePath = useBasePath();
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const ScrollToID = (id: string) => {
    navigate(basePath);
    if (currentPath === "/" || currentPath === "/preview") {
      scroller.scrollTo(id, {
        duration: 100,
        delay: 0,
        smooth: true,
        offset: -120,
      });
      toggleClick();
    } else {
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 100,
          delay: 0,
          smooth: true,
          offset: -120,
        });
        toggleClick();
      }, 100);
    }
  };

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
      <div
        className={
          features
            ? "links_container-style activeNavLink"
            : "links_container-style"
        }
      >
        <Link
          to={basePath}
          onClick={() => {
            ScrollToID("hot");
          }}
        >
          Super Hot
        </Link>
      </div>
      <div
        className={
          offers
            ? "links_container-style activeNavLink"
            : "links_container-style"
        }
      >
        <Link
          to={basePath}
          onClick={() => {
            ScrollToID("offers");
          }}
        >
          Offers
        </Link>
      </div>
      <div
        className={
          socials
            ? "links_container-style activeNavLink"
            : "links_container-style"
        }
      >
        <Link
          to={basePath}
          onClick={() => {
            ScrollToID("socials");
          }}
        >
          Socials
        </Link>
      </div>
      <div
        className={
          contacts
            ? "links_container-style activeNavLink"
            : "links_container-style"
        }
      >
        <Link
          to={basePath}
          onClick={() => {
            ScrollToID("contacts");
          }}
        >
          Contacts
        </Link>
      </div>
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
