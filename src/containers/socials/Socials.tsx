import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import { Social } from "../../components";
import "./socials.css";

const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

interface New {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  content: string;
}

const Socials = () => {
  const [news, setNews] = useState<New[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const newsData = await client.fetch<New[]>(`*[_type == "news"]`);
      setNews(newsData);
      console.log(newsData);
    }

    fetchNews();
  }, []);

  return (
    <div className="socials__container" id="socials">
      <div className="socials__title">Socials</div>
      <div className="socials__posts-container">
        {/* {news.map((pet) => (
          <div key={pet._id}>
            <div>ID: {pet._id}</div>
            <div>Type: {pet._type}</div>
            <div>Name: {pet.name}</div>
            Add any other properties you want to display
          </div>
        ))} */}
        {news.map((post) => (
          <Social
            key={post._id}
            title={post.title}
            description={post.description}
            thumb={post.thumbnail}
            link={""}
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
    </div>
  );
};

export default Socials;
