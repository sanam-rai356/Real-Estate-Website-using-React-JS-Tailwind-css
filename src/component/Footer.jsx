import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone, MdEmail } from "react-icons/md";
import FooterImg1 from "../assets/prop5.webp";
import FooterImg2 from "../assets/prop6.webp";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section
        className="footer bg-[#1F2937] grid w-full grid-cols-1 lg:grid-cols-3 
      md:grid-cols-2 text-white gap-10"
      >
        <div>
          <h4 className="text-2xl font-semibold mb-3">About Us</h4>
          <p className="my-4 leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, sit?
            Voluptate blanditiis autem eveniet optio dignissimos porro repellat.
            Eveniet quibusdam eum veritatis dolorum exercitationem sed illum
            ipsum quam repudiandae suscipit!
          </p>

          <div className="flex gap-4">
            <div
              className="size-10 flex justify-center items-center rounded-xl group hover:bg-red-600 
              hover:text-white bg-white"
            >
              <FaFacebookF className="text-black group-hover:text-white text-xl cursor-pointer " />
            </div>

            <div className="size-10 flex justify-center items-center group hover:bg-red-600 rounded-xl bg-white">
              <FaLinkedinIn className="text-black group-hover:text-white text-xl cursor-pointer" />
            </div>

            <div className="size-10 flex justify-center items-center group hover:bg-red-600 rounded-xl bg-white">
              <FaGithub className="text-black group-hover:text-white text-xl cursor-pointer" />
            </div>

            <div className="size-10 flex justify-center items-center group hover:bg-red-600 rounded-xl bg-white">
              <FaTwitter className="text-black group-hover:text-white text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* first section */}
        <div>
          <h4 className="text-2xl font-semibold mb-3">Contact Us</h4>

          <div>
            <div className="flex gap-2 items-center mb-5">
              <FaLocationDot />
              <span>10845 Griffith Peak Dr, Las Vegas, NV 89135</span>
            </div>

            <div className="flex gap-2 items-center mb-5">
              <MdOutlinePhoneIphone />
              <span>+91 879 098 8901</span>
            </div>

            <div className="flex gap-2 items-center ">
              <MdEmail />
              <span>office23@gmail.com</span>
            </div>
          </div>
        </div>
        {/* second section */}

        <div>
          <h4 className="text-2xl font-semibold mb-5">Latest Properties</h4>

          <div>
            <div className="flex gap-4 items-center">
              <img
                src={FooterImg1}
                alt="footer img 1"
                className="w-32 rounded-xl"
              />
              <div>
                <h5 className="text-lg">Villa with amazing view</h5>
                <span className="text-[15px] text-gray-300">$ 278.98</span>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <img
                src={FooterImg2}
                alt="footer img 2"
                className="w-32 rounded-xl"
              />
              <div>
                <h5 className="text-lg">Sea View Villa</h5>
                <span className="text-[15px] text-gray-300">$ 789.23</span>
              </div>
            </div>
          </div>
        </div>
        {/* third section */}
      </section>

      <div className="fixed z-40 right-4 bottom-4 size-12 group hover:bg-black bg-red-600 flex justify-center items-center rounded-full">
        <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
          <FaArrowUp className="size-8 group-hover:text-white cursor-pointer text-white" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
