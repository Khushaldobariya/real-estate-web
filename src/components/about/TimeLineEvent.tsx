


// import { useScroll, useSpring, useMotionValueEvent } from "motion/react";
// import React, { useState, useEffect, useRef } from "react";
// import { Store_Timeline } from "../../utils/consents.ts";
// import * as LucideIcons from "lucide-react";


// interface Store_Timeline {
//   year:string;
//   title:string;
//   description:string;
//   icon:React.createElement
// }

// const TimeLineEvent = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
//   // Get scroll progress
//   const { scrollYProgress } = useScroll();
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 50,
//     restDelta: 0.001,
//   });

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     // Convert progress (0 - 1) to pixel value
//     const scrollPosition = latest * document.documentElement.scrollHeight;

//     // Find the closest timeline item to the scroll track
//     let closestIndex = 0;
//     let minDiff = Infinity;
//     itemsRef.current.forEach((el, index) => {
//       if (el) {
//         const rect = el.getBoundingClientRect();
//         const diff = Math.abs(rect.top - window.innerHeight / 2); // Center align
//         if (diff < minDiff) {
//           minDiff = diff;
//           closestIndex = index;
//         }
//       }
//     });

//     setActiveIndex(closestIndex);
//   });

//   return (
//     <div className="max-w-5xl mx-auto px-4">
//       <div className="relative">
//         <div className="absolute left-0 mb-12 md:mb-16">
//           <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">
//             Our story
//           </h2>
//           <h1 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
//             Share your journey from
//             <br className="hidden md:block" /> the beginning to now
//           </h1>
//         </div>

//         {/* Scroll Tracking Line */}
//         <div
//           className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-300 origin-top"
//           style={{ transform: `scaleY(${scaleY})` }}
//         ></div>

//         <div className="space-y-16 md:space-y-24 relative">
//           {Store_Timeline.map((item, index) =>
          
//          {
//           const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons];
//           return  (

//             <div
//               key={index}

         
            
//               className="relative flex flex-col md:flex-row md:items-center"
//             >
//               {/* Left Side */}
//               <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
//                 {index % 2 === 1 && (
//                   <>

// <div className="w-full justify-end flex">

// {IconComponent && <IconComponent className={`w-6 h-6  ${activeIndex > index ? "text-pink-500" : "text-black"}`} />}
//   </div>
//                     <p
//                       className={`text-sm font-medium transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.year}
//                     </p>
//                     <h3
//                       className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600">{item.description}</p>
//                   </>
//                 )}
//               </div>

//               {/* Right Side */}
//               <div className="pl-16 md:w-1/2 md:pl-12">
//                 {index % 2 === 0 ? (
//                   <>
//                   {IconComponent && <IconComponent className={`w-6 h-6  ${activeIndex > index ? "text-pink-500" : "text-black"}`} />}
//                     <p
//                       className={`text-sm font-medium transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.year}
//                     </p>
//                     <h3
//                       className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600">{item.description}</p>
//                   </>
//                 ) : (
//                   <div className="md:hidden">
//                     <p
//                       className={`text-sm font-medium transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.year}
//                     </p>
//                     <h3
//                       className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
//                         activeIndex > index ? "text-pink-500" : "text-black"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                   </div>
//                 )}
//               </div>  
//             </div>
//           )})}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeLineEvent;



import { motion, useScroll } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { Store_Timeline } from "../../utils/consents.ts";
import * as LucideIcons from "lucide-react";

const TimeLineEvent = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIndices: number[] = [];

        entries.forEach((entry) => {
          const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting) {
            visibleIndices.push(index);
          }
        });

        // Keep only the top 2 visible indices
        visibleIndices.sort((a, b) => a - b);

     
        setActiveIndices(visibleIndices.slice(0, 2));
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-4 relative">
      {/* Scroll Tracking Line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-300 origin-top"
      />

      <div className="space-y-16 md:space-y-24">
        {Store_Timeline.map((item, index) => {
          const IconComponent =
            LucideIcons[item.icon as keyof typeof LucideIcons];

          return (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className="relative flex flex-col md:flex-row md:items-center"
            >
              {/* Left Side */}
              <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                {index % 2 === 1 && (
                  <>
                    <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </>
                )}
              </div>

              {/* Right Side */}
              <div className="pl-16 md:w-1/2 md:pl-12">
                {index % 2 === 0 ? (
                  <>
                    <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </>
                ) : (
                  <div className="md:hidden">
                    <p
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 transition-all duration-300 ${
                        activeIndices.includes(index) ? "text-pink-500" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLineEvent;


