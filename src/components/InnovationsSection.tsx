import React from "react";
import { VectorIcon } from "../utils/icons.tsx";
import { ServiceData } from "../utils/consents.ts";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const InnovationsSection = () => {
  return (
    <section className="container mx-auto  lg:pr-14  flex flex-col gap-x-6 lg:gap-x-10  md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden ">
        <img
          className="object-cover w-full h-[400px] md:h-[550px] lg:w-[57rem] lg:h-[57rem] "
          src="/assets/images/innovations.webp"
          alt="Innovations"
          draggable="false"
        />
      </div>

      <div className="w-full px-4 md:px-0 md:pr-8 2xl:pr-16 md:w-1/2 flex   justify-start flex-col gap-4 mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-medium">
          Our <span className="text-[#aa1d88]">Innovations</span>
        </h2>
        <p className="text-base md:text-xl text-center  mx-auto text-wrap">
          We prioritize developing innovative solutions that directly address
          their needs. Our dedicated team is driven by a customer-centric
          approach, ensuring every product and service we create enhances
          customer experiences and delivers tangible results.
        </p>

        <div className="mt-8 space-y-5">
          {ServiceData.map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <VectorIcon />
              </div>
              <div className="space-y-5">
                <div className="space-y-4">
                  <h2 className="text-xl lg:text-2xl text-gray-900">
                    {service.title}
                  </h2>
                  <hr className="border border-black w-[125px]" />
                </div>
                <p className="text-base md:text-xl" >{service.description}</p>

                <Link
                  to={service.link}
                  className="flex items-center w-fit gap-2 md:gap-4 text-lg relative after:bg-[#9b4992] after:absolute after:h-0.5 after:w-full // after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 // hover:text-[#9b4992] cursor-pointer"
                >
                  Learn more
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  );
};

export default InnovationsSection;
