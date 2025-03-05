"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import TimeLineEvent from "./TimeLineEvent.tsx";


interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: string;
  }

const timelineData: TimelineEvent[] = [
    {
      year: "2024",
      title: "Launch of ‘Horizon Complex’",
      description:
        "Introducing our 50th project in our home ground of Mira Road, where the next generation paves the way forward.",
      icon: "🏢",
    },
    {
      year: "2024",
      title: "Mandir Inauguration at Vasai",
      description:
        "Join us for the grand inauguration of our Mandir in Vasai, a testament to our belief in fostering a thriving community.",
      icon: "🛕",
    },
    {
      year: "2023",
      title: "Growth Partner 3rd Innovation, Launch",
      description:
        "An Investor Centric Plan Launched by Mr. Siddharth Bosmiya, Next Gen of Rashmi Group.",
      icon: "💡",
    },
  ];

const StoryTimeLine: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001, 
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 border border-black">
    {/* Scroll Track */}
    <motion.div
      style={{ scaleY }}
      className="absolute h-full w-1 bg-blue-500 top-0 left-1/2 -translate-x-1/2 origin-top"
    />

    {/* Timeline Events */}
    <div className="relative flex flex-col gap-10">
      {timelineData.map((event, index) => (
        <TimeLineEvent key={index} event={event} index={index} />
      ))}
    </div>
  </div>
  );
};

export default StoryTimeLine;
