import React from 'react'
import { Project } from '../../utils/type'

const ProjectDetails = ({project}:{project:Project}) => {
  return (
    <div className="md:p-4 flex items-center justify-center">
      <div className=" w-full max-w-7xl">
       
        <h1 className="text-xl font-bold mb-4">
          {project.name}
          <p className="text-xs  sm:text-sm md:text-lg  mt-2">{project.year}</p>
        </h1>

        <div className="pr-0 md:pr-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  space-y-2">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6  mr-2 sm:mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-sm sm:text-base md:text-lg ">
              {project.location}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm sm:text-base md:text-lg font-medium">
              2 Bedrooms
            </p>
           
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  space-y-2">
          <div className="flex items-center">

          <p className="text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1.5 sm:py-2">
            1BHK/2BHK Configuration
          </p>
          </div>
          <div className='text-left sm:text-right'>
          <p className="text-sm sm:text-base md:text-lg ">+ 3 Levels</p>
          </div>
        </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:flex-1 bg-white border-2 border-black text-gray-700  py-4 px-2 text-xs sm:text-base  hover:bg-gray-100 transition duration-300">
            ENQUIRY
          </button>
          <button className="w-full sm:flex-1 bg-[#a0238b] text-white  py-4 px-2 text-xs sm:text-base  hover:bg-[#7a1b69] transition duration-300">
            BOOK A VISIT
          </button>
          <button className="w-full sm:flex-1 bg-[#c89d59] text-white  py-4 px-2 text-xs sm:text-base hover:bg-yellow-700 transition duration-300">
            WHATSAPP
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails