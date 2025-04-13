import React from "react";
import Navbar from "../Navbar.tsx";


import CurrentProjects from "./CurrentProjects.tsx";
import Vision from "./Vision.tsx";
import TeamMember from "./TeamMember.tsx";
import KnowMore from "./KnowMore.tsx";

import Project from "./Project.tsx";
import { AboutHome } from "../../utils/icons.tsx";

const About = () => {
  return (
    <>
      <Navbar isHome={false} />
      <div className="my-20 space-y-10 md:space-y-16 ">
        
        <div className="max-w-7xl mx-auto pt-4 space-y-12">

  <div className="flex justify-center flex-col items-center border-b border-black pb-10 text-sm md:text-base lg:text-lg">
    <p>Home {">"} About</p>
    <h1 className="font-medium mb-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
      Our <span className="text-[#9d268c]">Mission</span>
    </h1>
    <p className="max-w-xl text-center text-base sm:text-lg md:text-xl">
      We believe in building not just homes but lifelong partnerships, where excellence meets experience, and dreams find their address.
    </p>
  </div>


  <div className="relative flex justify-center">
    
    <img
      src="/assets/images/gallery/gallery1.webp"
      className="object-cover  md:rounded-md"
      alt="Gallery"
    />
    <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-4 bg-[#9e248b] w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-full">
      <AboutHome />
    </div>
  </div>

  <div>
    <img
      src="/assets/images/rashmi-plan.webp"
      className="w-full max-w-full h-auto object-cover"
      alt="Rashmi Plan"
    />
  </div>
</div>

        <Project />
        <CurrentProjects />
        <Vision />
        <TeamMember />
        <KnowMore />
      </div>
    </>
  );
};

export default About;
