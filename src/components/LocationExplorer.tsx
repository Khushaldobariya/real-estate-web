import React from 'react'
import { LocationsArea } from '../utils/consents.ts'

const LocationExplorer = () => {
  return (
    <div className="bg-purple-100 py-10 text-center">
    <h2 className="text-2xl font-semibold text-gray-800 flex justify-center items-center">
      <span className="flex-1 border-t border-gray-500 mx-4"></span>
      Explore Projects in your desired locations
      <span className="flex-1 border-t border-gray-500 mx-4"></span>
    </h2>
    <p className="text-gray-600 mt-2">Explore our wide range of residential and commercial properties and discover your perfect space.</p>
    <div className="flex justify-around gap-8  mt-6 flex-wrap">
      {LocationsArea.map((location, index) => (
        <span key={index} className="text-xl font-medium text-gray-700">
          {location}
        </span>
      ))}
    </div>
  </div>
  )
}

export default LocationExplorer