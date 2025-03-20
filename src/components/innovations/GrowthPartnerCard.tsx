import React from 'react'
import { InnovationsIcon } from '../../utils/icons.tsx';


type Props = {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    videoSrc: string;
  };
const GrowthPartnerCard = ({
    title,
    subtitle,
    description,
    highlights,
    videoSrc,
  }:Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center  bg-white  rounded-2xl">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={videoSrc}
          alt="Growth Partner Video Thumbnail"
          className="rounded-xl w-full h-auto"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <span className="text-white text-3xl">▶</span>
          </div>
        </button>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-end text-center md:text-left">
        <h3 className="text-sm text-[#c69f58] font-medium ">{subtitle}</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-1 ">{title}</h2>
        <p className="text-gray-600 mt-3 text-end">{description}</p>
        <ul className="mt-4 space-y-2 text-gray-700">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex flex-row-reverse items-center gap-2">
              <span className="text-xl"><InnovationsIcon /></span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GrowthPartnerCard