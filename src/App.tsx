import "./App.css";

import { useInView } from "react-intersection-observer";
import { Features, Footer, Header, Offers, Socials } from "./containers";
import { Navbar } from "./components";
import { useRef } from "react";

function App() {
  const { ref: buttonRef, inView: headerIsVisible } = useInView();
  const featuresRef = useRef<null | HTMLElement>(null);

  const handleNavClick = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div id="navbar-bg" className="navbar__bg">
        {/* <Navbar ref={navbarRef} toggleButton={headerIsVisible} /> */}
        <Navbar toggleButton={headerIsVisible} />
      </div>
      <div className="App__container">
        <div ref={buttonRef} className="App__header">
          <Header />
        </div>
        <Features />
        <Offers />
        <Socials />
        <Footer />
        {/* <StudioPage /> */}
      </div>
    </div>
  );
}

export default App;
