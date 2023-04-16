import { Link } from "react-router-dom";
import "./banner.css";
import { RiArrowLeftCircleFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__texts">
        Disclaimer: This is <b>NOT</b> the Official website of Mat Rock. It is a
        demo project by{" "}
        <Link
          to={"https://github.com/DanishNasarudin/restaurant-web"}
          target={"_blank"}
        >
          <mark>Danish Nasarudin.</mark>{" "}
          <RiArrowLeftCircleFill style={{ verticalAlign: "middle" }} />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
