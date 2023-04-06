// import React from "react"
import "./App.css";

import { useInView } from "react-intersection-observer";
import { Features, Footer, Header, Socials } from "./containers";
import { Navbar } from "./components";

function App() {
  const { ref: buttonRef, inView: headerIsVisible } = useInView();

  return (
    <div className="App">
      <div className="navbar__bg">
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
