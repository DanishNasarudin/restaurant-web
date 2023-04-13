import { Navigate, useLocation } from "react-router-dom";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Navbar from "../navbar/Navbar";
import "./post.css";
import imageURL from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { useBasePath } from "..";

function Post() {
  const { description, title, date } = useLocation().state ?? {};
  // console.log(date);

  if (description === undefined || title === undefined || date === undefined) {
    return <Navigate replace to={useBasePath()} />;
  }

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let BooleanArray = {
    toggleButton: true,
    features: false,
    offers: false,
    socials: false,
    contacts: false,
  };

  return (
    <div className="post__container">
      <div className="post__navbar">
        <Navbar BooleanArray={BooleanArray} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <h1>{title}</h1>
          <p className="post__date">
            Post updated at: {date.toLocaleDateString("en-MY", dateOptions)}
          </p>
        </div>
        <PortableText value={[...description]} components={components} />
      </div>
    </div>
  );
}

export default Post;

const projectId = import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_PUBLIC_SANITY_DATASET;

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="post__image-container">
      <img
        className="post__images"
        src={imageURL({ projectId, dataset }).image(value).width(500).url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="post__normal-text">{children}</p>,
  },
  types: {
    image: SampleImageComponent,
  },
};
