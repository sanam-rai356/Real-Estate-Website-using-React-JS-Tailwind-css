import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Areas from "./component/Areas";
import Properties from "./component/Properties";
import Service from "./component/Service";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <Properties />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
