

import { useScroll, useSpring } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { Store_Timeline } from "../../utils/consents.ts";

const TimeLineEvent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 ">
      <div className="relative">
        <div className="absolute left-0 mb-12 md:mb-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">
            Our story
          </h2>
          <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
            Share your journey from
            <br className="hidden md:block" /> the beginning to now
          </h1>
        </div>

       
        <div
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-300 origin-top"
          style={{ transform: `scaleY(${scaleY})` }}
        ></div>

        <div className="space-y-16 md:space-y-24 relative">
          {Store_Timeline.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="relative flex flex-col md:flex-row md:items-center"
            >
              {/* Left Side */}
              <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                {index % 2 === 1 && (
                  <>
                    <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </>
                )}
              </div>

              {/* Right Side */}
              <div className="pl-16 md:w-1/2 md:pl-12">
                {index % 2 === 0 ? (
                  <>
                     <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </>
                ) : (
                  <div className="md:hidden">
                    <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndex > index ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {/* <p className="text-gray-600">{item.description}</p> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineEvent;
