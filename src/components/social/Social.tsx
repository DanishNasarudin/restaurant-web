import { Link, useLocation } from "react-router-dom";
import { useBasePath } from "..";
import { Content } from "../types/sanity";
import "./social.css";

type Props = {
  title: string;
  description: string;
  thumb: string;
  link: string;
  postContent: Content[];
  date: Date;
};

const Social = ({
  title,
  description,
  thumb,
  link,
  postContent,
  date,
}: Props) => {
  // const currentPageURL = useLocation();
  let basePath = useBasePath();
  if (basePath === "/") {
    basePath = "";
  }

  return (
    <div className="social__container">
      <div className="social__container-left">
        <div className="social__texts">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link
          className="social__link"
          to={`${basePath}/post/${link}`}
          state={{ description: postContent, title: title, date: date }}
          replace
        >
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
