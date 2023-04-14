import { fetchSanityData, Social } from "../../components";
import { imgURL } from "../../components/utils/sanityImage";
import "./socials.css";

const Socials = () => {
  const news = fetchSanityData();

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
