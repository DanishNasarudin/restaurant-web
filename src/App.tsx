import "./App.css";
import { useInView } from "react-intersection-observer";
import {
  Contacts,
  Features,
  Footer,
  Header,
  Offers,
  Socials,
} from "./containers";
import { Navbar } from "./components";
import { motion as m } from "framer-motion";

function App() {
  const { ref: buttonRef, inView: headerIsVisible } = useInView({
    threshold: 0.3,
  });
  const { ref: featuresRef, inView: featuresIsVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: offersRef, inView: offersIsVisible } = useInView({
    threshold: 0.9,
  });
  const { ref: socialsRef, inView: socialsIsVisible } = useInView({
    threshold: 0.8,
  });
  const { ref: contactsRef, inView: contactsIsVisible } = useInView({
    threshold: 0.8,
  });

  let BooleanArray = {
    toggleButton: headerIsVisible,
    features: featuresIsVisible,
    offers: offersIsVisible,
    socials: socialsIsVisible,
    contacts: contactsIsVisible,
  };

  // console.log(BooleanArray.features);

  return (
    <div className="App">
      <div id="navbar-bg" className="navbar__bg">
        <Navbar BooleanArray={BooleanArray} />
      </div>
      <m.div
        className="App__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div ref={buttonRef} className="App__header">
          <Header />
        </div>
        <div ref={featuresRef}>
          <Features />
        </div>
        <div ref={offersRef}>
          <Offers />
        </div>
        <div ref={socialsRef}>
          <Socials />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </m.div>
      <div className="footer__bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
