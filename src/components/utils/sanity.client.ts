import createClient from "@sanity/client";

const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// export const client = () => {
//     createClient({projectId, dataset, apiVersion, useCdn: false});
// }
