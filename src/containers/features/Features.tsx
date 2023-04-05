import React from "react";
import "./features.css";
import { Feature } from "../../components";
import logo from "../../assets/MatRock-logo.svg";

const Features = () => {
  return (
    <div className="features__container">
      <div className="features__title">
        <h2>Super Hot</h2>
      </div>
      <div className="features__column">
        <div className="features__rows row1">
          <Feature
            bannerImg={logo}
            bannerAlt="banner1"
            title="CHICKEN SET"
            desc="Enjoy the savory turmeric fried chicken with white rice, spicy sambal, sweet soy sauce, and refreshing drinking water."
          />
          <Feature
            bannerImg="#"
            bannerAlt="banner1"
            title="BEEF SET"
            desc="A special dish of delicious turmeric fried meat, served with white rice, charming sambal, sweet soy sauce, and fresh drinking water."
          />
          <Feature
            bannerImg="#"
            bannerAlt="banner1"
            title="OCTOPUS SET"
            desc="Enjoy the tender turmeric fried octopus, accompanied by white rice, tempting sambal, sweet soy sauce, and refreshing drinking water."
          />
        </div>
        <div className="features__rows row2">
          <Feature
            bannerImg="#"
            bannerAlt="banner1"
            title="SHRIMP SET"
            desc="Tempting turmeric fried shrimp, eaten with white rice, spicy sambal, sweet soy sauce, and refreshing drinking water."
          />
          <Feature
            bannerImg="#"
            bannerAlt="banner1"
            title="SUPREME SET"
            desc="A perfect dining experience with a combination of turmeric fried chicken and a choice of turmeric fried meat / squid / shrimp, accompanied by fresh drinking water."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
