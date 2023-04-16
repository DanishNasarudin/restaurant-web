import "./button.css";

type ButtonProps = {
  links: string;
  text: string;
};

const Button = ({ links, text }: ButtonProps) => {
  return (
    <div className="button__container">
      <a href={links} className="button__text" target={"_blank"}>
        {" "}
        {text}
      </a>
    </div>
  );
};

export default Button;
