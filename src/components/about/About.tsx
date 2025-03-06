import React from "react";
import Navbar from "../Navbar.tsx";
import StoryTimeLine from "./StoryTimeLine.tsx";
import { Home } from "lucide-react";

const About = () => {
  return (
    <div className="mb-16">
      <Navbar className="bg-white " />

      <div className="max-w-7xl mx-auto pt-4 space-y-16">
        <div className="flex justify-center flex-col items-center border-b border-black pb-10">
          <p>Home {">"} About </p>
          <h1 className="text-4xl font-semibold mb-8">
            Our <span className="text-[#9d268c]">Mission</span>
          </h1>
          <p className="max-w-xl text-center ">
            We believe in building not just homes but lifelong partnerships,
            where excellence meets experience, and dream find their address
          </p>
        </div>
        <div className="relative flex justify-center">
          <img src="/assets/images/aboutBanner.png" className="object-cover" />
          <div className="absolute -bottom-5 right-8 bg-[#9e248b] w-12 flex justify-center items-center h-12 rounded-full">
            <Home className="text-white" />
          </div>
        </div>

        <div>
          <StoryTimeLine />
        </div>
      </div>
    </div>
  );
};

export default About;
