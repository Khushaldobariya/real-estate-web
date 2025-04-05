import React from "react";
import { InnovationsIcon } from "../../utils/icons.tsx";

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
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center  bg-white  rounded-2xl px-6">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2">
  {/* Responsive Video Wrapper */}
  <div className="relative w-full pt-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/QDVH_gqnAeg?si=6yzFA1SInU8UHhxR"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  {/* Overlay Play Button */}

</div>


      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-end text-center md:text-left">
        <h3 className=" text-[#c69f58] font-medium text-sm md:text-base lg:text-lg ">{subtitle}</h3>
        <h2 className="text-2xl  md:text-5xl font-bold text-gray-800 mt-1 ">{title}</h2>
        <p className="text-gray-600 mt-3 text-end text-sm md:text-lg ">{description}</p>
        <ul className="mt-4 space-y-2 text-gray-700">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex flex-row-reverse text-sm md:text-lg  items-center gap-2"
            >
              <span className="text-xl">
                <InnovationsIcon />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GrowthPartnerCard;
