import "./footer.css";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__texts">
        <p>
          Thank you for browsing. May our food be the highlight of your day.
        </p>
      </div>
      <div className="footer__socials">
        <a href="https://www.instagram.com/officialmatrock/" target="_blank">
          <RiInstagramFill />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/matrockayamgorengkunyit/"
          target="_blank"
        >
          <RiFacebookBoxFill />
          Facebook
        </a>
        <a href="https://wa.me/166607314" target="_blank">
          <RiWhatsappFill />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Footer;
