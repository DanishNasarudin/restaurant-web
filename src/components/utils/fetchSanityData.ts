import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import { News } from "../types/sanity";
import usePreview from "./sanity.preview";
import useBasePath from "./useBasePath";

const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_PUBLIC_SANITY_API_VERSION,
  useCdn: import.meta.env.VITE_PUBLIC_SANITY_CDN,
});

const fetchSanityData = () => {
  const [news, setNews] = useState<News[]>([]);
  const basePath = useBasePath();
  const previewPage = usePreview(
    null,
    `*[_type == "news"] | order(_createdAt desc)`
  );

  useEffect(() => {
    async function fetchNews() {
      let newsData;
      if (basePath === "/preview") {
        newsData = previewPage;
        // console.log("Preview");
      } else {
        newsData = await client.fetch<News[]>(
          `*[_type == "news"] | order(_createdAt desc)`
        );
        // console.log("Not Preview");
      }
      setNews(newsData);
      // console.log(newsData);
    }

    fetchNews();
  }, []);

  return news;
};

export default fetchSanityData;
