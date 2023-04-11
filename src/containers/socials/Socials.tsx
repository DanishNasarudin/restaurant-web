import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import { Social } from "../../components";
import { News } from "../../components/types/sanity";
import { imgURL } from "../../components/utils/sanityImage";
import "./socials.css";

const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

const Socials = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const newsData = await client.fetch<News[]>(`*[_type == "news"]`);
      setNews(newsData);
      // console.log(imgURL(newsData[0].thumbnail).width(200).url());
      // console.log(newsData[0]);
      //find a way to convert content given by sanity.
      //https://github.com/sanity-io/block-content-to-hyperscript
      //https://www.sanity.io/docs/block-content
    }

    fetchNews();
  }, []);

  return (
    <div className="socials__container" id="socials">
      <div className="socials__title">
        <h2>Socials</h2>
      </div>
      <div className="socials__posts-container">
        {/* {news.map((pet) => (
          <div key={pet._id}>
            <div>ID: {pet._id}</div>
            <div>Type: {pet._type}</div>
            <div>Name: {pet.name}</div>
            Add any other properties you want to display
          </div>
        ))} */}
        {news.slice(0, 3).map((post) => (
          <Social
            key={post._id}
            title={post.title}
            description={post.description}
            thumb={imgURL(post.thumbnail).width(200).url()}
            link={post.slug.current}
            postContent={post.content}
            date={new Date(post._updatedAt)}
          />
        ))}
        {/* <Social
          title={"Ramadan"}
          description={"Happy Ramadan"}
          thumb={"#"}
          link={"https://www.google.com/"}
        /> */}
        {/* <Social
          title={"Ramadan"}
          description={"Happy Ramadan"}
          thumb={"#"}
          link={"https://www.google.com/"}
        />
        <Social
          title={"Ramadan"}
          description={"Happy Ramadan"}
          thumb={"#"}
          link={"https://www.google.com/"}
        /> */}
      </div>
      {/* <PortableText value={[...news[0].content]} components={components} /> */}
    </div>
  );
};

export default Socials;
