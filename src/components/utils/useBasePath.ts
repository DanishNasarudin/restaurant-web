import { useLocation } from "react-router-dom";

export function useBasePath() {
  const location = useLocation();

  const isPreview = location.pathname.startsWith("/preview");

  return isPreview ? "/preview" : "";
}
