import React from 'react'


type FilterSelectProps = {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  };
  
const FilterSelect = ({ label, options, value, onChange }: FilterSelectProps) => {
  return (
    <div className="flex flex-col border-r border-black px-6">
    <label className="text-sm font-medium text-gray-600">{label.toUpperCase()}</label>
    <select
      className="w-40 p-2  focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default FilterSelect