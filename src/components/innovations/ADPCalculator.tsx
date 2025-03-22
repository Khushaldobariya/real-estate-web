import React, { useState } from "react";
import { Slider } from "@mui/material";

const ADPCalculator: React.FC = () => {
  const [flatCost, setFlatCost] = useState(2500000);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);

  const downPayment40 = (flatCost * 40) / 100;
  const monthlyEMI = downPayment40 / 50;
  const remaining30 = (flatCost * 30) / 100;
  const loanEMI = 56200;
  const totalPayment = 8092778;
  const interestGiven = 3092778;
  const interestSaved = 0;

  const getSliderStyles = (Cost: number) => ({
    "& .MuiSlider-thumb": {
      backgroundColor: Cost ? "#ce89c4" : "#d9d9d9",
      border: "#9a2787",

      width: 16,
      height: 16,
      boxShadow: "none",
    },
    "& .MuiSlider-track": {
      backgroundColor: Cost ? "#9e2487" : "#d9d9d9",
      border: "none",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#d9d9d9",
      border: "#9a2787",
    },
    height: "10px",
  });

  return (
//     <div className="p-6 flex flex-col justify-center items-center md:flex-row gap-6 mx-auto bg-white ">
      

// <div className="w-full md:w-1/2 space-y-6">
//   <div>
//     <div className="flex justify-between">
//       <p>Flat Cost</p>
//       <input
//         type="text"
//         className="w-4/5 md:w-[149px] border-black p-2 border rounded-md"
//         value={flatCost.toLocaleString()}
//         onChange={(e) => setFlatCost(Number(e.target.value))}
//       />
//     </div>
//     <Slider
//       value={flatCost}
//       onChange={(e, value) => setFlatCost(value as number)}
//       min={100000}
//       max={10000000}
//       sx={getSliderStyles(flatCost)}
//       valueLabelDisplay="auto"
//     />
//     <div className="flex justify-between text-black/40">
//       <p>₹1 Lakh</p>
//       <p>₹10 Cr</p>
//     </div>
//   </div>

//   <div className="mb-4 space-y-2">
//     <div className="flex justify-between">
//       <p className="text-lg md:text-2xl">Down payment</p>
//       <p className="text-black/40 text-base">Flat Cost 30%</p>
//     </div>
//     <div className="max-w-md mx-auto">
//       <p className="text-wrap text-xl">
//         40% of the Flat cost given in form of interest-free EMI for 50 Months to Developer directly.
//       </p>
//     </div>
//   </div>

//   <div className="mb-4 space-y-2">
//     <div className="flex justify-between">
//       <p className="text-lg md:text-2xl">Monthly EMI at 0% Interest</p>
//       <input type="number" className="border border-black p-2 rounded w-[150px]" />
//       <p className="text-black/40 text-base">{`(Flat cost*40%)/50`}</p>
//     </div>
//     <div className="max-w-md mx-auto gap-2">
//       <p className="text-wrap text-xl">
//         Last 30% of the flat given during Possession. If not ready, you can take a Home Loan.
//       </p>
//       <p className="text-black/40">Remaining Amount: Flat * 30%</p>
//     </div>
//   </div>

//   <div className="flex justify-between">
//     <p className="text-lg md:text-2xl">Loan Amount</p>
//     <input type="number" className="border border-black p-2 rounded w-[150px]" />
//   </div>

//   <div className="flex gap-6">
//     <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center">
//       <label className="block ">Interest %</label>
//       <input
//         type="number"
//         className="border border-black p-2 md:w-[100px] h-10 rounded w-full"
//         value={interest}
//         onChange={(e) => setInterest(parseFloat(e.target.value))}
//       />
//     </div>
//     <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center">
//       <label className="block ">Time (Years)</label>
//       <input
//         type="number"
//         className="border border-black p-2 md:w-[100px] h-10 rounded w-full"
//         value={time}
//         onChange={(e) => setTime(parseInt(e.target.value))}
//       />
//     </div>
//   </div>
// </div>

//       <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around  items-center  gap-6">

        
//         <div className="text-center space-y-16">
//             <div>
//               <h3 className="text-sm md:text-base font-medium  text-black/40">
//                 Loan EMI
//               </h3>
//               <p className="text-xl font-medium md:text-2xl">
//               ₹ {loanEMI.toLocaleString()}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-sm md:text-base font-medium text-black/40">
//                 Total Payment
//                 <br />
//                 (Principal + Interest)
//               </h3>
//               <p className="text-xl font-medium md:text-2xl">
//               {totalPayment.toLocaleString()}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-sm md:text-base font-medium text-black/40">
//               Interest Given to bank(B)
//               </h3>
//               <p className="text-xl font-medium md:text-2xl">
//               {interestSaved}%
//               </p>
//             </div>
//           </div>
//           <div className="w-[271px] space-y-6 text-2xl p-8 text-center h-[293px] bg-[#c0c0c0] border-2 rounded-md border-[#a02389]">
//             <p >Total Interest Saved</p>
//             <p className=" text-[30px] text-[#a02389] tracking-widest">0% </p>
//             <p className="text-wrap">Save Lakhs of Interest on Home Loan</p>
            
//           </div>
//       </div>
//     </div>
<div className="p-6 flex flex-col md:flex-row gap-8 mx-auto bg-white justify-center items-center">
  {/* Left Section */}
  <div className="w-full md:w-1/2 space-y-8">
    {/* Flat Cost */}
    <div>
      <div className="flex justify-between items-center">
        <p>Flat Cost</p>
        <input
          type="text"
          className="w-4/5 md:w-[149px] border border-black p-2 rounded-md"
          value={flatCost.toLocaleString()}
          onChange={(e) => setFlatCost(Number(e.target.value))}
        />
      </div>
      <Slider
        value={flatCost}
        onChange={(e, value) => setFlatCost(value as number)}
        min={100000}
        max={10000000}
        sx={getSliderStyles(flatCost)}
        valueLabelDisplay="auto"
      />
      <div className="flex justify-between text-black/40">
        <p>₹1 Lakh</p>
        <p>₹10 Cr</p>
      </div>
    </div>

    {/* Down Payment */}
    <div className="space-y-3">
      <div className="flex justify-between">
        <p className="text-lg md:text-2xl">Down Payment</p>
        <p className="text-black/40 text-base">Flat Cost 30%</p>
      </div>
      <div className=" justify-center mx-auto text-center  md:max-w-md">
        
      <p className="text-xl text-wrap">
        40% of the Flat cost given in form of interest-free EMI for 50 Months to Developer directly.
      </p>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <p className="text-lg md:text-2xl">Monthly EMI at 0% Interest</p>
        <input type="number" className="border border-black p-2 rounded w-[150px]" />
        <p className="text-black/40 text-base">{`(Flat cost*40%)/50`}</p>
      </div>
      <div className=" justify-center mx-auto text-center  md:max-w-md">
      <p className="text-xl text-wrap">
        Last 30% of the flat given during Possession. If not ready, you can take a Home Loan.
      </p>
      <p className="text-black/40">Remaining Amount: Flat * 30%</p>
      </div>
      
    </div>


    <div className="flex justify-between">
      <p className="text-lg md:text-2xl">Loan Amount</p>
      <input type="number" className="border border-black p-2 rounded w-[150px]" />
    </div>


    <div className="flex gap-6">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center gap-2">
        <label className="block text-lg md:text-xl">Interest %</label>
        <input
          type="number"
          className="border border-black p-2 md:w-[100px] h-10 rounded w-full"
          value={interest}
          onChange={(e) => setInterest(parseFloat(e.target.value))}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center gap-2">
        <label className="block text-lg md:text-xl ">Time (Years)</label>
        <input
          type="number"
          className="border border-black p-2 md:w-[100px] h-10 rounded w-full"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
        />
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 justify-around items-center">
    {/* Loan EMI Details */}
    <div className="text-center space-y-12">
      <div>
        <h3 className="text-sm md:text-base font-medium text-black/40">Loan EMI</h3>
        <p className="text-xl font-medium md:text-2xl">₹ {loanEMI.toLocaleString()}</p>
      </div>
      <div>
        <h3 className="text-sm md:text-base font-medium text-black/40">
          Total Payment <br />
          (Principal + Interest)
        </h3>
        <p className="text-xl font-medium md:text-2xl">{totalPayment.toLocaleString()}</p>
      </div>
      <div>
        <h3 className="text-sm md:text-base font-medium text-black/40">Interest Given to Bank</h3>
        <p className="text-xl font-medium md:text-2xl">{interestSaved}%</p>
      </div>
    </div>

    {/* Interest Saved Box */}
    <div className="w-[271px] space-y-6 text-2xl p-8 text-center h-[293px] bg-[#c0c0c0] border-2 rounded-md border-[#a02389]">
      <p>Total Interest Saved</p>
      <p className="text-[30px] text-[#a02389] tracking-widest">0%</p>
      <p className="text-wrap">Save Lakhs of Interest on Home Loan</p>
    </div>
  </div>
</div>

  );
};

export default ADPCalculator;
