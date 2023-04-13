import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import { Social, useBasePath, usePreview } from "../../components";
import { News } from "../../components/types/sanity";
import { imgURL } from "../../components/utils/sanityImage";
import "./socials.css";

const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_PUBLIC_SANITY_API_VERSION,
  useCdn: import.meta.env.VITE_PUBLIC_SANITY_CDN,
});

const Socials = () => {
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
      // console.log(imgURL(newsData[0].thumbnail).width(200).url());
      // console.log(newsData);
    }

    fetchNews();
  }, []);

  return (
    <div className="socials__container" id="socials">
      <div className="socials__title">
        <h2>Socials</h2>
      </div>
      <div className="socials__posts-container">
        {news.slice(0, 3).map((post) => (
          <Social
            key={post._id}
            title={post.title}
            description={post.description}
            thumb={imgURL(post.thumbnail).width(500).auto("format").url()}
            link={post.slug.current}
            postContent={post.content}
            date={new Date(post._updatedAt)}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
