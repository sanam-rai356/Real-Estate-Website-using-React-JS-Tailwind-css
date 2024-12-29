import React from "react";
// data-aos="zoom-in"
const Contact = () => {
  return (
    <>
      <section id="contact" className="main_padding">
        <div className="bg-[#FEE2E2] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-10">
          <div data-aos="zoom-in" className="bg-white rounded-lg px-8 py-10">
            <form className="w-full flex flex-col gap-5">
              <h4 className="font-[500] text-xl">Send us a message today</h4>
              <input
                type="text"
                placeholder="Enter Fullname"
                className="focus:outline-none w-full bg-transparent  border-[2px] border-gray-300 rounded-xl p-3"
              />

              <input
                type="email"
                placeholder="Enter Email"
                className="focus:outline-none w-full bg-transparent  border-[2px] border-gray-300 rounded-xl p-3"
              />

              <input
                type="number"
                placeholder="Enter Phone Number"
                className="focus:outline-none w-full bg-transparent  border-[2px] border-gray-300 rounded-xl p-3"
              />

              <textarea
                rows={6}
                placeholder="Enter Your Message Here..."
                className="focus:outline-none resize-none bg-transparent w-full  border-[2px] border-gray-300 rounded-xl p-3"
              ></textarea>

              <button
                className="w-full p-4 font-semibold hover:bg-red-800 rounded-xl text-white bg-red-600"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* form section */}

          <div data-aos="zoom-in" className="py-16">
            <div className="mb-16">
              <h4 className="text-red-500">REACH US</h4>
              <h3 className="text-3xl mt-3 font-[500]">
                Get in touch with us <br /> today and our team <br /> will
                assist you
              </h3>
            </div>
            <p className="text-gray-500 text-[18px]">
              Our experts and developers would love to contribute their
              expertise and insights and help you today. Contact us to help you
              plan your next transaction, either buying or selling a home.
            </p>
          </div>
          {/* text section */}
        </div>
      </section>
    </>
  );
};

export default Contact;
