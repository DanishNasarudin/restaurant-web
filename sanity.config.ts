import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { getStartedPlugin } from "./plugins/sanity-plugin-tutorial";

const devOnlyPlugins = [getStartedPlugin()];

const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID!;
const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studioPage",
  name: "Restaurant_Content_Studio",
  title: "Restaurant Content Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
});
