import { useState } from "react";
import "./location.css";
import { Location as LocationImg } from "../../assets";

interface LocationProps {
  title: string;
  contact: string;
  address: string;
}

const Location = ({ title, contact, address }: LocationProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className="location__container">
      <div
        className={
          active ? `location__cards locationActive` : `location__cards`
        }
      >
        <div className="location__img-text">
          <div className="location__img" onClick={() => setActive(!active)}>
            <img src={LocationImg} alt="location" />
          </div>
          <p>
            <b>{title}</b>
          </p>
        </div>
        <div className="location__card-details">
          <p>
            <b>Contact</b>
          </p>
          <p>{contact}</p>
          <br />
          <p>
            <b>Full Address</b>
          </p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
