import React from "react";
import "./header.css";
import logo from "../../assets/MatRock-logo.svg";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__texts">
        <h1 className="header__texts-title">
          Mat Rock Special <br /> Turmeric Fried Chicken
        </h1>
        <p className="header__texts-description">
          Enjoy a spicy turmeric fried dish with chicken, meat, squid, or shrimp
          served with a special sambal.
        </p>
      </div>
      <div className="header__artwork">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
