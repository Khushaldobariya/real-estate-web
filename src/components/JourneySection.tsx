import React from "react";
import { StatsData } from "../utils/consents.ts";

const JourneySection = () => {
  return (
    // <section className="container mt-16 md:mt-24 lg:mt-28 px-6 md:px-8 lg:px-10 relative flex flex-col md:flex-row justify-between items-center">
    //   <div className="max-w-xl md:max-w-3xl lg:max-w-5xl  ">
    //     <h2 className="text-2xl md:text-3xl lg:text-6xl font-medium mb-4">
    //       Our Journey Towards{" "}
    //       <span className="text-[#9e238d]">Excellence!</span>
    //     </h2>
    //     <p className="text-black mt-4 text-lg md:text-2xl  ">
    //       {" "}
    //       Immensely grateful for the journey we&apos;ve undertaken together,
    //       reaching this far with your unwavering support. Our story
    //       wouldn&apos;t be complete without you. We consider ourselves blessed
    //       for the opportunity to deliver your dream home and be a part of your
    //       journey.
    //     </p>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  mt-12 text-[#9e238d] font-medium ">
    //       {StatsData.map((stat, index) => (
    //         <div className="flex  flex-col items-center space-y-8">
    //           <span
    //             className={`${stat.size} text-[#9e238d]  font-medium   sm:text-lg md:text-xl lg:text-[55px]`}
    //           >
    //             {stat.value}
    //           </span>
    //           <p className="text-black text-base md:text-lg lg:text-xl capitalize">
    //             {stat.label}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* House Shape Image */}
    //   <div className="relative hidden md:block">
    //     <div className="w-48 h-48 md:w-60 lg:w-80 mx-auto md:h-[350px] lg:h-[450px] bg-cover bg-center">
    //       <img
    //         src="/assets/images/gallery/home.gif"
    //         className="h-full w-full object-cover "
    //       />
    //     </div>
    //   </div>
    // </section>



    <section className="container mt-16 md:mt-24 lg:mt-28 px-6 md:px-8 lg:px-10 relative flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-16">
  <div className="max-w-xl md:max-w-3xl lg:max-w-5xl">
    <h2 className="text-2xl md:text-3xl lg:text-6xl font-medium mb-8">
      Our Journey Towards{" "}
      <span className="text-[#9e238d]">Excellence!</span>
    </h2>
    <p className="text-black mt-4 text-lg md:text-2xl">
      Immensely grateful for the journey we&apos;ve undertaken together,
      reaching this far with your unwavering support. Our story
      wouldn&apos;t be complete without you. We consider ourselves blessed
      for the opportunity to deliver your dream home and be a part of your
      journey.
    </p>

    <div className="flex flex-col  md:flex-row flex-wrap justify-start gap-4 md:gap-16  lg:gap-24 mt-12 text-[#9e238d] font-medium">
  {StatsData.map((stat, index) => (
    <div className="flex flex-col items-center space-y-10" key={index}>
      <span
        className={`${stat.size} text-[#9e238d] text-center font-medium sm:text-lg md:text-xl lg:text-[55px]`}
      >
        {stat.value}
      </span>
      <p className="text-black text-center text-base md:text-lg lg:text-4xl font-medium capitalize">
        {stat.label}
      </p>
    </div>
  ))}
</div>
  </div>

  {/* House Shape Image */}
  <div className="relative hidden md:block">
    <div className="w-48 h-48 md:w-60 lg:w-80 mx-auto md:h-[350px] lg:h-[450px] bg-cover bg-center">
      <img
        src="/assets/images/gallery/home.gif"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>


//     <section className=" max-w-7xl lg:container mt-16 md:mt-24 lg:mt-28 px-6 md:px-8 lg:px-10 relative flex flex-col md:flex-row justify-between items-center">
//   <div className="max-w-xl md:max-w-3xl lg:max-w-5xl">
//     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  lg:text-5xl   tracking-wide  mb-4">
//       Our Journey Towards <span className="text-[#9e238d]">Excellence!</span>
//     </h2>
//     <p className="text-black mt-4 text-base md:text-lg lg:text-xl">
//       Immensely grateful for the journey we've undertaken together,
//       reaching this far with your unwavering support. Our story
//       wouldn’t be complete without you. We consider ourselves blessed
//       for the opportunity to deliver your dream home and be a part of your
//       journey.
//     </p>

//     {/* Stats Section */}
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-[#9e238d] font-medium">
//       {StatsData.map((stat, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <span className={`text-[#9e238d] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl  lg:text-5xl `}>
//             {stat.value}
//           </span>
//           <p className="text-black text-base md:text-lg lg:text-xl capitalize">
//             {stat.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* House Shape Image */}
//   <div className="relative hidden md:block">
//     <div className="w-48 h-48 md:w-60 lg:w-80 mx-auto md:h-[350px] lg:h-[450px] bg-cover bg-center">
//       <img
//         src="/assets/images/gallery/home.gif"
//         className="h-full w-full object-cover"
//         alt="Home Journey"
//       />
//     </div>
//   </div>
// </section>

  );
};

export default JourneySection;
