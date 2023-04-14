import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useBasePath } from "..";

interface LinkToIdProps {
  id_inView: boolean;
  id_name: string;
  link_name: string;
  onClick: () => void;
}

const MenuLinkToId = ({
  id_inView,
  id_name,
  link_name,
  onClick,
}: LinkToIdProps) => {
  const currentPath = useLocation().pathname;
  const basePath = useBasePath();
  const navigate = useNavigate();

  const ScrollToID = (id: string) => {
    navigate(basePath);
    if (currentPath === "/" || currentPath === "/preview") {
      scroller.scrollTo(id, {
        duration: 100,
        delay: 0,
        smooth: true,
        offset: -120,
      });
      onClick();
    } else {
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 100,
          delay: 0,
          smooth: true,
          offset: -120,
        });
        onClick();
      }, 100);
    }
  };

  return (
    <div
      className={
        id_inView
          ? "links_container-style activeNavLink"
          : "links_container-style"
      }
    >
      <Link
        to={basePath}
        onClick={() => {
          ScrollToID(id_name);
        }}
      >
        {link_name}
      </Link>
    </div>
  );
};

export default MenuLinkToId;
