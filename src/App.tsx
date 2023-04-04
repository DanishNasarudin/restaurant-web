// import React from "react"
import "./App.css";

import { Features, Footer, Header, Socials } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="navbar__bg">
        <Navbar />
      </div>
      <div className="App__container">
        <Header />
        <Features />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
