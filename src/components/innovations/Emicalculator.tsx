import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Slider } from "@mui/material";

const EmiCalculator: React.FC = () => {
  const [flatCost, setFlatCost] = useState<number>(2500000);
  const [downPayment, setDownPayment] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(8.75);
  const [tenure, setTenure] = useState<number>(12);


  const [emi, setEmi] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [principalPercentage, setPrincipalPercentage] = useState<number>(0);
  const [interestPercentage, setInterestPercentage] = useState<number>(0);

  useEffect(() => {
    const loanAmount = flatCost - downPayment;
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    if (loanAmount > 0 && monthlyInterestRate > 0) {
      const emiValue =
        (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalMonths)) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

      const calculatedTotalPayment = emiValue * totalMonths;
      const calculatedTotalInterest = calculatedTotalPayment - loanAmount;

      setEmi(Math.round(emiValue));
      setTotalPayment(Math.round(calculatedTotalPayment));
      setTotalInterest(Math.round(calculatedTotalInterest));
      setPrincipalPercentage(
        Math.round((loanAmount / calculatedTotalPayment) * 100)
      );
      setInterestPercentage(
        Math.round((calculatedTotalInterest / calculatedTotalPayment) * 100)
      );
    }
  }, [flatCost, downPayment, interestRate, tenure]);

  // Pie chart data
  const pieData = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [principalPercentage, interestPercentage],
        backgroundColor: ["#a0238b", "#c69e58"],
      },
    ],
  };


  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

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
  
     

      <div className="flex flex-col md:flex-row gap-24">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <div className="flex justify-between">
              <p>Flat Cost</p>
              <input
                type="text"
                className="w-4/5 md:w-[149px] border-black p-2 border rounded-md"
                value={formatCurrency(flatCost)}
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
          <div>
            <div className="flex justify-between">
              <p>Down Payment</p>
              <input
                type="text"
                className="w-4/5 md:w-[149px] border-black p-2 border rounded-md"
                value={formatCurrency(downPayment)}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
            <Slider
              value={downPayment}
              onChange={(e, value) => setDownPayment(value as number)}
              min={100000}
              sx={getSliderStyles(flatCost)}
              max={flatCost}
              valueLabelDisplay="auto"
            />
            <div className="flex justify-between text-black/40">
              <p>₹1 Lakh</p>
              <p>₹10 Cr</p>
            </div>
          </div>

          {/* Tenure */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div>
                <div className="flex justify-between">
                  <p>Interest Rate (% P.A.)</p>
                  <input
                    type="number"
                    className="w-2/5 md;w-[87px] border-black p-2 border rounded-md"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                </div>
                <Slider
                  value={interestRate}
                  onChange={(e, value) => setInterestRate(value as number)}
                  min={0.5}
                  max={15}
                  step={0.1}
                  sx={getSliderStyles(interestRate)}
                  valueLabelDisplay="auto"
                />
                <div className="flex justify-between text-black/40">
                  <p>0.5</p>
                  <p>15</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <div className="flex justify-between">
                  <p>Tenure (Years)</p>
                  <input
                    type="number"
                    className="w-2/5 md:w-[50px] border-black p-2 border rounded-md"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                </div>

                <Slider
                  value={tenure}
                  onChange={(e, value) => setTenure(value as number)}
                  min={1}
                  sx={getSliderStyles(tenure)}
                  max={30}
                  valueLabelDisplay="auto"
                />
                <div className="flex justify-between text-black/40">
                  <p>1</p>
                  <p>30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around  items-center  gap-6">
       
          <div className="text-center space-y-16">
            <div>
              <h3 className="text-sm md:text-base font-medium  text-black/40">
                Loan EMI
              </h3>
              <p className="text-xl font-medium md:text-2xl">
                {formatCurrency(emi)}
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-medium text-black/40">
                Total Payment
                <br />
                (Principal + Interest)
              </h3>
              <p className="text-xl font-medium md:text-2xl">
                {formatCurrency(totalPayment)}
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-medium text-black/40">
                Interest Given
              </h3>
              <p className="text-xl font-medium md:text-2xl">
                {formatCurrency(totalInterest)}
              </p>
            </div>
          </div>
          <div>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    
  );
};

export default EmiCalculator;
