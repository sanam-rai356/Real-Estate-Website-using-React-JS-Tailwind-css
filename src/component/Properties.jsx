import { PropertiesDetails } from "../export/Export";
import PropertyDetails from "./PropertyDetails";

const Properties = () => {
  // console.log(PropertiesDetails);
  return (
    <>
      <section id="properties" className="main_padding">
        <div data-aos="zoom-in" className="mb-16">
          <h4 className="text-red-500">PROPERTIES</h4>
          <h3 className="text-3xl mt-3 font-[500]">
            Explore the latest <br />
            properties available
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PropertiesDetails.map((property) => (
            <PropertyDetails
              key={property.id}
              img={property.img}
              title={property.title}
              price={property.price}
              para={property.para}
              toiltet={property.toiltet}
              bed={property.bed}
              sq={property.sq}
              name={property.name}
              location={property.location}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Properties;
