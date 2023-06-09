import { definePreview } from "@sanity/preview-kit";

const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing projectId or dataset.");
}

const usePreview = definePreview({
  projectId,
  dataset,
});

export default usePreview;
