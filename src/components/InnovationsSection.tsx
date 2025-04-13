import React from "react";
import { VectorIcon } from "../utils/icons.tsx";
import { ServiceData } from "../utils/consents.ts";
import { ChevronRight } from "lucide-react";

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

                <a
                  href={service.link}
                  className="flex items-center w-fit gap-2 md:gap-4 text-lg relative after:bg-[#9b4992] after:absolute after:h-0.5 after:w-full // after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 // hover:text-[#9b4992] cursor-pointer"
                >
                  Learn more
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    //     <section className="max-w-7xl lg:container mx-auto px-6 sm:px-8 lg:px-16 flex flex-col md:flex-row items-stretch gap-10 md:gap-16">

    //   <div className="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden">
    //     <img
    //       className="object-cover w-full h-[400px] hover:scale-125 transition-transform delay-200 sm:h-[500px] md:h-[600px] lg:h-[800px] max-w-[500px] md:max-w-none"
    //       src="/assets/images/innovations.webp"
    //       alt="Innovations"
    //       draggable="false"
    //     />
    //   </div>

    //   <div className="w-full md:w-1/2 flex flex-col justify-center gap-4  h-full">
    //     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  tracking-wide  ">
    //       Our <span className="text-[#a2218f]">Innovations</span>
    //     </h2>

    //     <p className="text-sm sm:text-base md:text-lg max-w-prose">
    //       We prioritize developing innovative solutions that directly address
    //       their needs. Our dedicated team is driven by a customer-centric
    //       approach, ensuring every product and service we create enhances
    //       customer experiences and delivers tangible results.
    //     </p>

    //     <div className="mt-6 space-y-6 ">
    //       {ServiceData.map((service, index) => (
    //         <div key={index} className="flex items-start gap-4 sm:gap-6">
    //           <div className="flex-shrink-0">
    //             <VectorIcon />
    //           </div>
    //           <div className="space-y-4  sm:space-y-6">
    //             <div className="space-y-3 sm:space-y-5">
    //               <h3 className="text-lg sm:text-xl md:text-2xl  text-gray-900">
    //                 {service.title}
    //               </h3>
    //               <hr className="border border-black w-[100px] sm:w-[125px]" />
    //             </div>
    //             <p className="text-sm sm:text-base">{service.description}</p>

    //             <a
    //               href={service.link}
    //               className="flex items-center w-fit gap-2 text-base sm:text-lg relative after:bg-[#9b4992] after:absolute after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#9b4992] cursor-pointer"
    //             >
    //               Learn more
    //               <ChevronRight size={16} />
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default InnovationsSection;
