"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import TimeLineEvent from "./TimeLineEvent.tsx";
import {  Store_Timeline } from "../../utils/consents.ts";


interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: string;
  }



const StoryTimeLine: React.FC = () => {

  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001, 
  });

  return (
    <div className="relative w-full  mx-auto  ">
  
    <motion.div
      style={{ scaleY }}
      className="absolute h-full w-1 bg-pink-500 top-0 left-1/2 -translate-x-1/2 origin-top"
    />


    <div className="relative flex flex-col gap-10">
   
        <TimeLineEvent/>
      
    </div>
  </div>
  );
};

export default StoryTimeLine;
