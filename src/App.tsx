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
      <Header />
      <Features />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
