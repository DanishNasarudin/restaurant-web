import { useLocation } from "react-router-dom";

const useBasePath = () => {
  const location = useLocation();

  const isPreview = location.pathname.startsWith("/preview");

  return isPreview ? "/preview" : "/";
};

export default useBasePath;
