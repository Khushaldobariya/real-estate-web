import React from 'react'
import { LocationsArea } from '../utils/consents.ts'

const LocationExplorer = () => {
  return (
  //   <section className="bg-purple-100 py-10 text-center">
  //   <h2 className="text-2xl  text-gray-800 flex justify-center items-center">
  //     <span className="flex-1 border-t border-gray-500 mx-4"></span>
  //     <p className=" text-lg md:text-5xl font-medium">

  //     Explore Projects in your desired locations
  //     </p>
  //     <span className="flex-1 border-t border-gray-500 mx-4"></span>
  //   </h2>
  //   <p className="text-gray-600 text-xs md:text-sm  mt-2">Explore our wide range of residential and commercial properties and discover your perfect space.</p>
  //   <div className="flex justify-around  gap-5 md:gap-6 lg:gap-10  mt-6 flex-wrap">
  //     {LocationsArea.map((location, index) => (
  //       <span key={index} className="text-lg  md:text-2xl lg:text-4xl font-medium text-gray-700">
  //         {location}
  //       </span>
  //     ))}
  //   </div>
  // </section>
  <section className="bg-purple-100 py-10">
  <div className="container mx-auto px-4 text-center">
    {/* Heading with dividers */}
    <h2 className="text-gray-800 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
      <span className="hidden sm:block flex-1 border-t border-gray-500 mx-4"></span>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-medium">
        Explore Projects in Your Desired Locations
      </p>
      <span className="hidden sm:block flex-1 border-t border-gray-500 mx-4"></span>
    </h2>

    {/* Subtext */}
    <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto">
      Explore our wide range of residential and commercial properties and discover your perfect space.
    </p>

    {/* Locations Grid */}
    <div className="flex flex-wrap justify-center gap-3  sm:gap-5 md:gap-8 lg:gap-10 mt-6">
      {LocationsArea.map((location, index) => (
        <span
          key={index}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-700 px-4"
        >
          {location}
        </span>
      ))}
    </div>
  </div>
</section>

  )
}

export default LocationExplorer