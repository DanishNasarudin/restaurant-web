import React from "react";
import { Studio } from "sanity";
import config from "../../../sanity.config";
import "./studioPage.css";

const StudioPage = () => {
  return <Studio config={config} />;
};

export default StudioPage;
