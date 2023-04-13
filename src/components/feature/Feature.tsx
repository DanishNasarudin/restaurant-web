import "./feature.css";
import Button from "../button/Button";

type FeatureProp = {
  bannerImg: string;
  bannerAlt: string;
  title: string;
  desc: string;
};

const Feature = ({ bannerImg, bannerAlt, title, desc }: FeatureProp) => {
  return (
    <div className="feature__container">
      <div className="feature__banner">
        <img src={bannerImg} alt={bannerAlt} />
        <div className="feature__banner-button">
          <Button links="#" text="Order" />
        </div>
      </div>
      <div className="feature__texts">
        <p>
          <b>{title}</b>
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
