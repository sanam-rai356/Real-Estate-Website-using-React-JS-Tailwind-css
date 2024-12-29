import { useEffect } from "react";
import HeroImg from "../assets/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section
        className="mt-[128px] w-[90%] main_padding rounded-xl flex flex-col justify-center mx-auto h-[80vh] "
        id="hero"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="max-w-2xl ">
          <h1
            data-aos="zoom-in"
            className="text-4xl lg:text-5xl font-semibold text-white leading-[40px] lg:leading-[60px]"
          >
            Find your next Home in Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-[16px] lg:text-lg mt-4 leading-[30px]"
          >
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
