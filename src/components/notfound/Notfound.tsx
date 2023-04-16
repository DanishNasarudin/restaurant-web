import { useEffect } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import useBasePath from "../utils/useBasePath";
import "./notfound.css";

const Notfound = () => {
  const basePath = useBasePath();
  useEffect(() => {}, []);
  setTimeout(() => {
    return redirect(basePath);
  }, 500);

  return (
    <div className="notfound__container">
      <div className="notfound__texts">Page Not Found</div>{" "}
      <div className="notfound__link">
        <Link to={basePath}>Go To Home Page</Link>
      </div>
    </div>
  );
};

export default Notfound;
