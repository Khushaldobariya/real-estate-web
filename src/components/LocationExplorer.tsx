import React from "react";
import { LocationsArea } from "../utils/consents.ts";
import { motion } from "motion/react";

const LocationExplorer = () => {
  return (
    <section className="bg-[#FEE9FE] py-10 md:py-20 text-center space-y-20">
      <div className="px-0 md:px-6 lg:px-10">
        <h2 className="text-2xl  text-gray-800 flex justify-center items-center">
          <span className="flex-1 border-t border-gray-500 mx-4"></span>
          <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl  font-medium">
            Explore Projects in your desired locations
          </p>
          <span className="flex-1 border-t border-gray-500 mx-4"></span>
        </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-2 leading-relaxed max-w-4xl mx-auto">
        Explore our wide range of residential and commercial properties and
        discover your perfect space.
      </p>
      </div>
      <div className="w-full overflow-hidden flex items-center">

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-7 md:gap-28 shrink-0"

         >
        {[...LocationsArea, ...LocationsArea, ...LocationsArea].map((location, index) => (
          <span
            key={index}
            className="text-lg sm:text-xl  md:text-2xl lg:text-4xl font-medium text-gray-700"
          >
            {location}
          </span>
        ))}
      </motion.div>
      </div>
    </section>
   
  );
};

export default LocationExplorer;
