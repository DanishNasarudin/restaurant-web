import imageURL from "@sanity/image-url";
import { Thumbnail } from "../types/sanity";

const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET;

export const imgURL = (source: Thumbnail) => {
  return imageURL({
    projectId,
    dataset,
  }).image(source);
};
