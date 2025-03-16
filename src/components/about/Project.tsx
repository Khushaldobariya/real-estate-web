import React, { useState } from "react";
import { About_project } from "../../utils/consents.ts";
import ProjectCard from "./ProjectCard.tsx";
import { motion } from "motion/react";

const Project = () => {
    // const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="py-16 px-4 gap-6 md:px-16 w-full  overflow-hidden flex items-center  mx-auto projectGradient">
        <motion.div
    initial={{ x: 0 }}
    // animate={isHovered ? { x: 0 } : { x: "-50%" }}
    animate={{x:"-50%"}}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="flex gap-7 md:gap-10 shrink-0 ">

{About_project.map((item, index) => (
        //   <div
        //     key={index}
        //     onMouseEnter={() => setIsHovered(true)}
        //     onMouseLeave={() => setIsHovered(false)}
        //   >
            <ProjectCard description={item.description} title={item.title} year={item.year} />
        //   </div>
        ))}
        </motion.div>
    </div>
  );
};

export default Project;
