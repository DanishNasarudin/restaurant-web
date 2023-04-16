import { Link } from "react-router-dom";
import "./sanitystudionav.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import useBasePath from "./useBasePath";

const SanityStudioNav = (props: any) => {
  const basePath = useBasePath();

  return (
    <div>
      <div className="studio__topNav">
        <Link to={basePath} replace>
          <div className="studio__texts">
            <RiArrowGoBackFill />
            <b>Go To Website</b>
          </div>
        </Link>
      </div>
      <>{props.renderDefault({ props })} </>
    </div>
  );
};

export default SanityStudioNav;
