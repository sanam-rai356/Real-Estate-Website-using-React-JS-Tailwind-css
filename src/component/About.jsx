import AboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="w-full main_padding">
        <div className="w-full flex gap-16 items-center flex-col lg:flex-row">
          <img
            data-aos="zoom-in"
            src={AboutImg}
            className="lg:w-[470px] w-full h-auto rounded-xl"
            alt="about img"
          />

          <div>
            <h3
              data-aos="zoom-in"
              className="text-red-500 aos-init aos-animate"
            >
              WHO WE ARE
            </h3>
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-black my-3 text-[30px]  lg:text-[40px] font-semibold leading-[40px] lg:leading-[50px] aos-init"
            >
              We help clients buy and sell houses since 1989
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              className=" text-[18px] lg:text-xl my-3 text-gray-600 text-justify aos-init aos-animate"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              quam eaque inventore voluptatum rem consectetur quae magni optio
              quis incidunt?
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-transform duration-300 aos-init aos-animate"
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
