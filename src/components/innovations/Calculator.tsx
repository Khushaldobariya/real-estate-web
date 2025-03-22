import React, { useState } from 'react'
import EmiCalculator from './Emicalculator.tsx';
import ADPCalculator from './ADPCalculator.tsx';

const Calculator = () => {
      const [activeButton, setActiveButton] = useState<string>("home");
  return (
    <div className="px-6 mx-auto py-6 space-y-10">
         <h3 className="text-center text-lg md:text-5xl font-medium">
        EMI Calculator
      </h3>

      <div className="border-b border-black/40 flex">
        <button
          className={`text-base flex items-center justify-center rounded-l-md w-1/2 md:w-[140px] h-[48px] ${
            activeButton === "home"
              ? "bg-[#C69E58] text-white"
              : "bg-white border-black/40 border"
          }`}
          onClick={() => setActiveButton("home")}
        >
          Home Loan
        </button>
        <button
          className={`text-base flex items-center justify-center rounded-r-md w-1/2 md:w-[140px] h-[48px] ${
            activeButton === "adp"
              ? "bg-[#C69E58] text-white"
              : "bg-white border-black/40 border"
          }`}
          onClick={() => setActiveButton("adp")}
        >
          ADP
        </button>
      </div>
      {activeButton === "adp" ? <ADPCalculator /> :<EmiCalculator />}
    </div>
  )
}

export default Calculator