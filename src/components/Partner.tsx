import React from "react";
import { Partners_Bank } from "../utils/consents.ts";
import { motion } from "motion/react";

const Partner = () => {
  return (
    <section className="bg-[#ffe9fe] py-14 space-y-11 md:space-y-14 ">
      <div>
        <h2 className="text-center text-2xl sm:text-[26px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-medium">
          OUR BANKING <span className="text-[#9f238a]">Partners</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-7 md:gap-28 shrink-0"
        >
          {[...Partners_Bank, ...Partners_Bank, ...Partners_Bank].map(
            (item, index) => (
              <img
                draggable={false}
                src={item}
                key={index}
                className="w-[75px] h-[75px] md:w-[100px] md:h-[100px]  lg:h-[150px] lg:w-[150px] object-contain"
                alt={`Partner ${index}`}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
