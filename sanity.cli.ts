import { defineCliConfig } from "sanity/cli";
import { UserConfig } from "vite";

// const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID;
// const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET;

// console.log(projectId);
// console.log("pass");

export default defineCliConfig({
  api: {
    projectId: "c4pqb04j",
    dataset: "production",
  },
  vite: (viteConfig: UserConfig): UserConfig => ({
    ...viteConfig,
    // ...rest of config
  }),
});
