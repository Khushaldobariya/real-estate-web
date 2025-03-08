
import { motion, useScroll } from "framer-motion";
import React from "react";
import TimeLineEvent from "./TimeLineEvent.tsx";
const StoryTimeLine: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full mx-auto">
      {/* Timeline Scroll Bar */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute h-full w-1 bg-pink-500 top-0 left-3 md:left-1/2 md:-translate-x-1/2 origin-top"
      />

      {/* Timeline Events */}
      <div className="relative flex flex-col gap-10">
        <TimeLineEvent />
      </div>
    </div>
  );
};

export default StoryTimeLine;



