
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import TimeLineEvent from "./TimeLineEvent.tsx";

const StoryTimeLine: React.FC = () => {
  const containerRef = useRef(null); 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full mx-auto overflow-hidden">
      
      <motion.div
        style={{ scaleY }} 
        transition={{ type: "tween", duration: 0.1 }}
        className="absolute h-full w-1 bg-pink-500 top-0 left-3 md:left-1/2 md:-translate-x-1/2 origin-top"
      />

    
      <div className="relative flex flex-col gap-10">
        <TimeLineEvent />
      </div>
    </div>
  );
};

export default StoryTimeLine;
