import Location from "../location/Location";
import "./locations.css";

const Locations = () => {
  return (
    <div className="locations__container">
      <Location
        title={"Kampung Pandan"}
        contact={"+603-9202 9314"}
        address={
          "Jalan Kampung Pandan, Maluri, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur."
        }
      />
      <Location
        title={"Sri Rampai"}
        contact={"+60-16 660 7314"}
        address={
          "16 Jalan Rampai Niaga 3 Sri Rampai, Wangsa Maju, 53300 Kuala Lumpur."
        }
      />
      <Location
        title={"Wisma Central"}
        contact={"+60-123456789"}
        address={
          "Wisma Central, 147, Jalan Ampang, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur."
        }
      />
    </div>
  );
};

export default Locations;
