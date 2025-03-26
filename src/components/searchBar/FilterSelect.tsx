import React from 'react'


type FilterSelectProps = {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    isMobile: boolean;
  };
  
const FilterSelect = ({ label, options, value, onChange ,isMobile }: FilterSelectProps) => {
  return (
    <div className= {`flex flex-col ${isMobile ? "border  rounded-md" : "border-r"} border-r border-black  px-2 md:px-6`}>

      
    <label className="text-sm font-medium text-gray-600">{label.toUpperCase()}</label>
    <select
      className={ ` text-base md:text-xl p-2 ${isMobile ? 'w-full' :"w-40"}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option} >
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default FilterSelect