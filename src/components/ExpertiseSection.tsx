import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="bg-[#ffe9fe] mt-12 md:mt-14 lg:mt-18 xl:mt-20 flex flex-col items-center px-4 py-10 md:px-10  md:py-16 lg:py-20 ">
      <div className=" max-w-7xl space-y-14 md:space-y-16 lg:space-y-24  lg:container mx-auto">
        <div className="  w-full flex justify-center  flex-col md:flex-row  items-center">
          <div className="w-full md:w-4/5 ">
            <h2 className="  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  text-center text-gray-800 mb-4 font-medium">
              Expertise
            </h2>
          </div>
          <div className="h-3/5 ">
            <div className=" md:w-4/5 ml-auto">
              <p className="text-gray-700  text-base sm:text-lg md:text-xl leading-relaxed">
                Established in 1998, Rashmi Group has built a Legacy of
                Excellence in the Real Estate market. Known for Customer Centric
                Product and quality construction, the company has delivered over
                14,000 homes. The Group’s Legacy is defined by groundbreaking
                innovation and a steadfast commitment to excellence and
                homeowner’s satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-0 md:mt-6 w-full  md:w-11/12 mx-auto ">
          <img
            src="/assets/images/people.png"
            alt="Expertise Group"
            className=" shadow-lg w-full"
          />
        </div>
      </div>
    </section>
   
  );
};

export default ExpertiseSection;
