import React from "react";
import { About_Project } from "../../utils/type";


interface ProjectCardProps extends About_Project {
  index: number; 
}

const ProjectCard = ({ title, description, year, icon: Icon , index }:ProjectCardProps) => {
  return (
<div className={`group w-80 md:w-96 border shadow-sm rounded-lg p-4 h-64 flex flex-col justify-between transition duration-300 hover:shadow-md hover:border-pink-400 overflow-hidden  ${index %2 == 1 ? "bg-[#f5efe1] border-[#905c87]" :"bg-pink-100 border-[#905c87]"}  relative`}>
  <div className="space-y-2 flex-grow">
    <Icon className="w-8 h-8  transition-colors duration-300 group-hover:text-pink-400" />
    <h3 className="text-lg lg:text-lg font-medium  text-gray-800 transition-colors duration-300 group-hover:text-pink-400">
      {title}
    </h3>
    <p className=" text-black/40 line-clamp-2 text-sm md:text-base">{description}</p>
  </div>
  <p className=" text-gray-600 text-sm md:text-base">{year}</p>
</div>
  );
};

export default ProjectCard;