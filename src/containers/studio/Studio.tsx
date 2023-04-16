import { Studio as StudioPage } from "sanity";
import config from "../../../sanity.config";
import "./studio.css";

const Studio = () => {
  return <StudioPage config={config} />;
};

export default Studio;
