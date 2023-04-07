import "./App.css";

import { useInView } from "react-intersection-observer";
import { Features, Footer, Header, Socials } from "./containers";
import { Navbar } from "./components";

function App() {
  const { ref: buttonRef, inView: headerIsVisible } = useInView();

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
        <Socials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
