import React, { useState } from "react";
import { About_project } from "../../utils/consents.ts";
import ProjectCard from "./ProjectCard.tsx";
import { motion } from "motion/react";
import { About_Project } from "../../utils/type.ts";


const Project = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" px-4 gap-6 md:px-16 w-full  overflow-hidden flex items-center  mx-auto ">
        <motion.div
    initial={{ x: 0 }}
    animate={isHovered ? { x: 0 } : { x: "-50%" }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    className="flex gap-7 md:gap-10 shrink-0 ">

      {About_project.map((item:About_Project , index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ProjectCard index={index} description={item.description} title={item.title} year={item.year} icon={item.icon}   />
          </div>
        ))}
        </motion.div>
    </div>
  );
};

export default Project;
