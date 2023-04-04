import React from "react";
import "./button.css";

type ButtonProps = {
  links: string;
  text: string;
};

const Button = ({ links, text }: ButtonProps) => {
  return (
    <div className="button__container">
      <a href={links} className="button__text">
        {" "}
        {text}
      </a>
    </div>
  );
};

export default Button;
