import {
  FaLocationDot,
  FaCamera,
  FaSquareDribbble,
  FaShareNodes,
} from "react-icons/fa6";
import { FaVideo, FaUserCircle, FaHeart, FaBath, FaBed } from "react-icons/fa";
import {} from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

const PropertyDetails = ({
  img,
  title,
  price,
  para,
  toiltet,
  bed,
  sq,
  name,
  location,
}) => {
  return (
    <>
      <div data-aos="zoom-in" className="bg-white shadow-sm rounded-xl">
        <div className="relative">
          <img
            src={img}
            alt="property image"
            className="w-full object-cover rounded-tr-xl rounded-tl-xl h-[270px]"
          />

          <div className="absolute top-4 w-full flex justify-between px-4">
            <button
              className="bg-red-600 py-2 px-3 hover:bg-white hover:text-black 
            rounded-full text-[12px] text-white"
            >
              Featured
            </button>

            <div className="space-x-2">
              <button
                className="bg-red-600 py-2 px-3 hover:bg-white hover:text-black 
            rounded-full text-[12px] text-white"
              >
                Sales
              </button>

              <button
                className="bg-red-600 py-2 px-3 hover:bg-white hover:text-black 
            rounded-full text-[12px] text-white"
              >
                Active
              </button>
            </div>
          </div>

          <div className="absolute text-white top-56 w-full flex justify-between px-4">
            <div className="  flex gap-2">
              <FaLocationDot />
              <p className="text-[14px]">{location}</p>
            </div>

            <div className="flex gap-3">
              <FaVideo />
              <FaCamera />
            </div>
          </div>
        </div>
        {/* image section */}

        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-[500] text-lg">{title}</h3>
          <h4 className="text-[#DC2626] font-[600] text-2xl">{price}</h4>
          <p className="text-sm leading-6">{para}</p>

          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <FaBath className="text-[#F87171]" />
              <span>{toiltet}</span>
            </div>

            <div className="flex gap-1 items-center">
              <FaBed className="text-[#F87171]" />
              <span>{bed}</span>
            </div>

            <div className="flex gap-1 items-center">
              <FaSquareDribbble className="text-[#F87171]" />
              <span>{sq}</span>
            </div>
          </div>
          <hr className="h-[1.5px] bg-gray-300 my-5" />
          {/* hr section */}

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <FaUserCircle className="text-[#F87171]" />
              <span>{name}</span>
            </div>

            <div className="flex gap-2">
              <div className="bg-transparent hover:border-none hover:bg-black cursor-pointer size-8 flex justify-center items-center border border-gray-400">
                <FaShareNodes className="text-lg text-[#F87171]" />
              </div>

              <div className="bg-transparent hover:border-none hover:bg-black cursor-pointer size-8 flex justify-center items-center border border-gray-400">
                <FaHeart className="text-lg text-[#F87171]" />
              </div>

              <div className="bg-transparent hover:border-none hover:bg-black cursor-pointer size-8 flex justify-center items-center border border-gray-400">
                <TiPlus className="text-lg text-[#F87171]" />
              </div>
            </div>
          </div>
        </div>
        {/* property detail section */}
      </div>
    </>
  );
};

export default PropertyDetails;
