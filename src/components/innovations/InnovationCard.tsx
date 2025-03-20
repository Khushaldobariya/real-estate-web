import React from 'react'
import { Innovations } from '../../utils/icons.tsx';

interface Props {
    index: number;
    number: string;
    title: string;
    description: string;
    points: string[];
    image: string;
}
const InnovationCard = ({
    index,
    number,
    title,
    description,
    points,
    image,
  }:Props ) => {
  return (
    <div className={`flex flex-col md:flex-row gap-8 p-6 md:p-12 items-center ${  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
    <div className="flex flex-col justify-center flex-1">
      <h3 className="text-sm text-[#c69f58] font-medium">{number} Innovation</h3>
      <h2 className="text-2xl font-bold text-blue-900 mt-2">{title}</h2>
      <p className="text-gray-600 mt-4">{description}</p>
      <ul className="mt-4 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-center space-x-2 text-gray-700">
            <span className="text-lg">✔</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-500">Card Index: {index}</p>
    </div>
    <div className="relative flex justify-center items-center flex-1">
      <div  />
      <img src={image} alt={title} width={500} height={500} className="rounded-lg" />
    </div>
  </div>
  )
}

export default InnovationCard