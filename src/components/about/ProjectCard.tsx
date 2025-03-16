import React from 'react'

interface Props {
    title:string;
description:string;
year:number
}
const ProjectCard = ({title ,description ,year}:Props) => {
  return (
    <div className="space-y-4 w-80 md:w-96 border shadow-sm rounded-lg p-4 h-44 flex flex-col justify-between bg-white/40">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-black/40 line-clamp-3">{description}</p>
    </div>
    <p className="text-sm text-gray-600">{year}</p>
  </div>
  )
}

export default ProjectCard