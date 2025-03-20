import React from "react";
import { About_Project } from "../../utils/type";


interface ProjectCardProps extends About_Project {
  index: number; 
}

const ProjectCard = ({ title, description, year, icon: Icon , index }:ProjectCardProps) => {
  return (
<div className={`group w-80 md:w-96 border shadow-sm rounded-lg p-4 h-48 flex flex-col justify-between transition duration-300 hover:shadow-md hover:border-pink-400 overflow-hidden  ${index %2 == 1 ? "bg-[#f5efe1] border-[#905c87]" :"bg-pink-100 border-[#905c87]"}  relative`}>
  <div className="space-y-2 flex-grow">
    <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-pink-400" />
    <h3 className="text-lg font-medium  text-gray-800 transition-colors duration-300 group-hover:text-pink-400">
      {title}
    </h3>
    <p className="text-sm text-black/40 line-clamp-2">{description}</p>
  </div>
  <p className="text-sm text-gray-600">{year}</p>
</div>
  );
};

export default ProjectCard;