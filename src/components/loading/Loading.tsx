import "./loading.css";
import { RiRefreshLine } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loading__icon">
        <RiRefreshLine size={27} />
      </div>
      <div className="loading__text">Loading...</div>
    </div>
  );
};

export default Loading;
