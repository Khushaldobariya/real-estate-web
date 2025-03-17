import React from "react";
import { About_Project } from "../../utils/type";


const ProjectCard = ({ title, description, year, icon: Icon }:About_Project) => {
  return (
<div className="group w-80 md:w-96 border shadow-sm rounded-lg p-4 h-48 flex flex-col justify-between bg-white/40 transition duration-300 hover:shadow-md hover:border-pink-400 overflow-hidden">
  <div className="space-y-2 flex-grow">
    <Icon className="w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-pink-500" />
    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-pink-500">
      {title}
    </h3>
    <p className="text-sm text-black/40 line-clamp-2">{description}</p>
  </div>
  <p className="text-sm text-gray-600">{year}</p>
</div>
  );
};

export default ProjectCard;