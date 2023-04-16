import "./header.css";
import graphic from "../../assets/hero-graphic.png";
import { Button } from "../../components";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__texts">
        <h1 className="header__texts-title">
          Mat Rock Special <br /> Turmeric Fried Chicken
        </h1>
        <p>
          Enjoy a spicy turmeric fried dish with chicken, meat, squid, or shrimp
          served with a special sambal.
        </p>
        <Button
          links="https://www.foodpanda.my/restaurant/o3fl/mat-rock-special-ayam-goreng-kunyit-kampung-pandan"
          text="Order Now"
        />
      </div>
      <div className="header__artwork">
        <img src={graphic} alt="graphic" />
      </div>
    </div>
  );
};

export default Header;
