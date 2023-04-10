import { Link } from "react-router-dom";
import "./social.css";

type Props = {
  title: string;
  description: string;
  thumb: string;
  link: string;
};

const Social = ({ title, description, thumb, link }: Props) => {
  return (
    <div className="social__container">
      <div className="social__container-left">
        <div className="social__texts">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link className="social__link" to={link}>
          See More
        </Link>
      </div>
      <div className="social__thumbnail">
        <img src={thumb} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Social;
