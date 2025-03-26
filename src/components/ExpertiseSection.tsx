import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="bg-[#ffe9fe]  flex flex-col items-center px-8 py-16 md:px-10  md:py-16 lg:py-20 ">
      <div className=" max-w-7xl space-y-14 md:space-y-16 lg:space-y-24  lg:container mx-auto">
        <div className="  w-full flex justify-center  flex-col md:flex-row  items-center">
          <div className="w-full md:w-4/5 ">
            <h2 className="  text-xl md:text-4xl lg:text-5xl  text-center text-gray-800 mb-4 font-medium">
              Expertise
            </h2>
          </div>
          <div className="h-3/5 ">
            <div className=" md:w-4/5 ml-auto">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
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
        <div className="mt-6 w-full  md:w-11/12 mx-auto ">
          <img
            src="/assets/images/people.png"
            alt="Expertise Group"
            className=" shadow-lg w-full"
          />
        </div>
      </div>
    </section>
    //     <section className="bg-[#ffe9fe] flex flex-col items-center px-6 py-10 md:px-12 md:py-16">
    //   <div className="container max-w-7xl mx-auto p-6 md:p-10 ">
    //     <div className="flex flex-col md:flex-row items-center">

    //       <div className="w-full md:w-1/2 text-center md:text-left">
    //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  tracking-wider text-gray-800 mb-4">
    //           Expertise
    //         </h2>
    //       </div>

    //       <div className="w-full md:w-1/2">
    //         <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
    //           Established in 1998, Rashmi Group has built a Legacy of Excellence in
    //           the Real Estate market. Known for customer-centric products and quality
    //           construction, the company has delivered over 14,000 homes. The Group’s
    //           Legacy is defined by groundbreaking innovation and a steadfast commitment
    //           to excellence and homeowner satisfaction.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="mt-8 w-full">
    //       <img
    //         src="/assets/images/people.png"
    //         alt="Expertise Group"
    //         className="w-full h-auto  shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default ExpertiseSection;
