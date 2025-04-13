import React from "react";
import { AboutHome } from "../../utils/icons.tsx";

const CircularText = () => {
  const text = "OH CHARLOTTE AISA. BLOG";

  return (
    <div className="relative w-52 h-52 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]"
      >
        <defs>
          <path
            id="textPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
        </defs>
        <text>
          <textPath
            xlinkHref="#textPath"
            startOffset="0%"
            textAnchor="middle"
            className="text-xs font-medium tracking-[0.1em] fill-current"
          >
            GHAR OH TO AISA • OUR BLOG • GHAR OH TO AISA • OUR BLOG •
          </textPath>
        </text>
      </svg>
      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#9e248b] rounded-[50%] flex items-center justify-center z-10 shadow-lg">
        <AboutHome />
      </div>
    </div>
  );
};

export default CircularText;
