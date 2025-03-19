import React from "react";
import { Partners_Bank } from "../utils/consents.ts";
import { motion } from "motion/react";

const Partner = () => {
  return (
    <div className="bg-[#ffe9fe] py-14 space-y-11 ">


      <h2 className="text-center  text-xl md:text-5xl uppercase">OUR BANKING <span className="text-[#905c87]">Partners</span></h2> 


<div className="w-full overflow-hidden flex items-center">
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: "-50%" }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="flex gap-7 md:gap-28 shrink-0"
  >
    {[...Partners_Bank, ...Partners_Bank ,...Partners_Bank].map((item, index) => (
      <img src={item} key={index}  className="w-[100px] h-[100px] md:h-[200px] md:w-[200px] object-contain" alt={`Partner ${index}`} />
    ))}
  </motion.div>
</div>

    </div>
  );
};

export default Partner;
