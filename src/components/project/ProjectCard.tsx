import React from 'react'
import { ProjectDataType } from '../../utils/type.ts'


interface Props {
    projectInfo: ProjectDataType,
    index: number
}
const ProjectCard = ({projectInfo ,index}:Props) => {
  return (
<div
  className={`flex flex-col md:min-h-[350px] ${
    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
  }`}
>
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex items-center justify-center">
    {projectInfo.image ? (
      <img
        src={projectInfo.image}
        alt="Project"
        draggable="false"
        className="object-contain w-full h-auto max-h-[500px] transition-transform duration-300 hover:scale-105"
      />
    ) : (
      <div className="w-full h-[400px] flex items-center justify-center ">
        <p className="text-gray-500"></p>
      </div>
    )}
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center p-6 bg-white">
    <h3 className="text-base md:text-xl font-medium">{projectInfo.title}</h3>

    <div className="border-t-2 border-black w-48 mt-2">
      <div className="mt-2">
        <button className="bg-gray-200 w-24 h-10 transition-all duration-300 hover:bg-gray-300">
          {projectInfo.project_type}
        </button>
      </div>
      <p className="mt-2">{projectInfo.address}</p>
    </div>

    <p className="mt-4 text-gray-600">
      Inaugurated in 2003, Rashmi Hetal stands tall with its 6 wings, G+4
      storeys, and efficient 1BHK layouts, offering zero wastage flats for
      optimal living.
    </p>
  </div>
</div>

  )
}

export default ProjectCard