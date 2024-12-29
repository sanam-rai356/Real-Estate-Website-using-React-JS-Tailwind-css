import AreaImg1 from "../assets/area1.jpg";
import AreaImg2 from "../assets/area2.jpg";
import AreaImg3 from "../assets/area3.jpg";

const Areas = () => {
  return (
    <>
      <section className="main_padding">
        <div className="bg-[#FEE2E2]  px-10 py-14 mx-auto rounded-lg">
          <div
            data-aos="zoom-in"
            className=" flex flex-col items-center lg:flex-row gap-10"
          >
            <div className="lg:w-[500px] w-full">
              <h4 className="text-red-500">POPULAR AREAS</h4>
              <h3 className="text-3xl mt-3 font-[500]">
                Explore most <br /> popular areas
              </h3>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
              <img
                src={AreaImg1}
                className="w-full h-[350px] object-cover lg:h-[400px] rounded-lg"
                alt="AreaImg1"
              />
              <img
                src={AreaImg2}
                alt="AreaImg2"
                className="w-full h-[350px] object-cover lg:h-[400px] rounded-lg"
              />
              <img
                src={AreaImg3}
                alt="AreaImg3"
                className="w-full h-[350px] object-cover lg:h-[400px] rounded-lg"
              />
            </div>
          </div>
          {/* area image section */}

          <div
            data-aos="zoom-in"
            className="mt-16 gap-5 text-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
          >
            <div className="flex gap-3 items-center justify-center">
              <p className="text-6xl font-[500]">5K</p>
              <span className="text-gray-500 text-[18px]">
                ACTIVE <br /> LISTINGS
              </span>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <p className="text-6xl font-[500]">9K</p>
              <span className="text-gray-500 text-[18px]">
                SOLID <br /> LISTINGS
              </span>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <p className="text-6xl font-[500]">6K</p>
              <span className="text-gray-500 text-[18px]">
                CLIENT <br /> WE,VE SERVED
              </span>
            </div>
          </div>
          {/* count section */}
        </div>
      </section>
    </>
  );
};

export default Areas;
