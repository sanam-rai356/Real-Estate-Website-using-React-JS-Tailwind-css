import { TestimonialDetail } from "../export/Export";
// data-aos="zoom-in"
const Testimonial = () => {
  return (
    <>
      <section className="main_padding" id="testimonial">
        <div className="mb-16" data-aos="zoom-in">
          <h4 className="text-red-500">OUR CLIENTS</h4>
          <h3 className="text-3xl mt-3 font-[500]">
            What are our clients <br />
            saying about us
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TestimonialDetail.map((list) => (
            <div
              data-aos="zoom-in"
              className="bg-white cursor-pointer  hover:bg-[#FEE2E2] hover:-translate-y-1 transition-transform duration-300 px-8 py-10 rounded-lg shadow-sm"
              key={list.id}
            >
              <div className="flex gap-3 items-center">
                <img src={list.img} alt="{list.fullname}" className="w-20" />
                <div>
                  <h3 className="mb-1 text-xl font-[500]">{list.fullname}</h3>
                  <span className="text-[15px] text-gray-500">
                    {list.feedback}
                  </span>
                </div>
              </div>
              {/* image section */}

              <div className="my-5 leading-7 text-[15px] text-gray-500">
                <p>{list.para}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
