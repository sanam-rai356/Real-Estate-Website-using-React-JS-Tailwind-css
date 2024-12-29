import { ServiceDetails } from "../export/Export";

const Service = () => {
  return (
    <>
      <div className="main_padding" id="service">
        <div className="bg-[#FEE2E2] w-full rounded-xl px-10 py-12">
          <div data-aos="zoom-in" className="mb-16">
            <h4 className="text-red-500">OUR SERVICES</h4>
            <h3 className="text-3xl mt-3 font-[500]">
              Top real estate <br />
              services available
            </h3>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ServiceDetails.map((service) => (
              <div
                data-aos="zoom-in"
                className="bg-white hover:bg-red-300 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                key={service.id}
              >
                <div className="px-8 py-16">
                  <h4 className="font-[600] text-2xl">{service.title}</h4>
                  <p className="my-4 text-gray-600">{service.para}</p>
                  <a
                    className="text-red-600 text-lg font-[400] underline"
                    href="#"
                  >
                    {service.anker}
                  </a>
                </div>

                <hr className="border-none h-[4px] rounded-br-lg rounded-bl-lg bg-red-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
