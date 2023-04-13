import "./offers.css";
import { RiTruckFill, RiShoppingBasketFill } from "react-icons/ri";
import { forwardRef } from "react";

const Offers = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="offers__container" id="offers">
      <div className="offers__title">
        <h2>Offers</h2>
      </div>
      <div className="offers__card-container">
        <div className="offers__card">
          <h2>
            <RiTruckFill />
            Swift Delivery
          </h2>
          <p>
            Experience speedy, dependable delivery with Mat Rock. We're
            committed to ensuring your meal arrives promptly, so you can focus
            on savoring every delicious bite.
          </p>
        </div>
        <div className="offers__card">
          <h2>
            <RiShoppingBasketFill />
            Simplified Options
          </h2>
          <p>
            We provide a straightforward and clear menu selection to make it
            easy for you to pick your favorite dishes. Browse our uncomplicated
            menu and savor delicious meals without the fuss.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Offers;
