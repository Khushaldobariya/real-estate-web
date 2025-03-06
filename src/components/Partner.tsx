import React from "react";
import { Partners_Bank } from "../utils/consents.ts";
import { motion } from "motion/react";

const Partner = () => {
  return (
    <div className="bg-pink-100 my-16 py-16 space-y-10 ">
      <h2 className="uppercase text-center text-4xl ">Partners</h2>
   


<div className="w-full overflow-hidden flex items-center">
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="flex gap-7 md:gap-10 shrink-0"
  >
    {[...Partners_Bank, ...Partners_Bank].map((item, index) => (
      <img src={item} key={index}  alt={`Partner ${index}`} />
    ))}
  </motion.div>
</div>

    </div>
  );
};

export default Partner;
