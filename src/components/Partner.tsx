import React from "react";
import { Partners_Bank } from "../utils/consents.ts";
import { motion } from "motion/react";

const Partner = () => {
  return (
//     <section className="bg-[#ffe9fe] py-14 space-y-11 ">


//       <h2 className="text-center  text-xl lg:text-5xl uppercase  font-medium">OUR BANKING <span className="text-[#905c87]">Partners</span></h2> 


// <div className="w-full overflow-hidden flex items-center">
//   <motion.div
//     initial={{ x: 0 }}
//     animate={{ x: "-50%" }}
//     transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//     className="flex gap-7 md:gap-28 shrink-0"
//   >
//     {[...Partners_Bank, ...Partners_Bank ,...Partners_Bank].map((item, index) => (
//       <img draggable={false} src={item} key={index}  className="w-[100px] h-[100px]  lg:h-[200px] lg:w-[200px] object-contain" alt={`Partner ${index}`} />
//     ))}
//   </motion.div>
// </div>

//     </section>
<section className="bg-[#ffe9fe] py-10 md:py-14">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-8 md:space-y-11">
    {/* Title */}
    <h2 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium">
      OUR BANKING <span className="text-[#905c87]">Partners</span>
    </h2>

    {/* Scrolling Logos Container */}
    <div className="w-full overflow-hidden flex items-center py-5 md:py-8 lg:py-10">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 md:gap-16 lg:gap-28 shrink-0"
      >
        {[...Partners_Bank, ...Partners_Bank, ...Partners_Bank].map((item, index) => (
          <img
            draggable={false}
            src={item}
            key={index}
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[200px] lg:h-[200px] object-contain"
            alt={`Partner ${index}`}
          />
        ))}
      </motion.div>
    </div>
  </div>
</section>


  );
};

export default Partner;
