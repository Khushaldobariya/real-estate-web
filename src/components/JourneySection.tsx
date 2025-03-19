import React from 'react'
import { StatsData } from '../utils/consents.ts'

const JourneySection = () => {
  return (
    <div className=" mt-28 my-16 px-10 relative flex flex-col md:flex-row justify-between items-center">
    <div className="max-w-3xl md:max-w-5xl  ">
      <h2 className="text-3xl md:text-6xl font-semibold mb-4">
        Our Journey Towards{" "}
        <span className="text-[#905c87]">Excellence!</span>
      </h2>
      <p className="text-black mt-4 text-lg md:text-2xl  " >   Immensely grateful for the journey we&apos;ve undertaken together, reaching this far with your unwavering support. Our story wouldn&apos;t be complete without you. We consider ourselves blessed for the opportunity to deliver your dream home and be a part of your journey.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8 text-[#905c87]  font-semibold">
     {StatsData.map((stat ,index)=> (
      <div className="space-y-7">
      <span className={`${stat.size} text-[#905c87] font-semibold    sm:text-lg md:text-5xl`}>{stat.value}</span>
      <p className="text-black text-base md:text-xl capitalize">{stat.label}</p>
    </div>
     )) }
      </div>
    </div>

    {/* House Shape Image */}
    <div className="relative hidden md:block">
      <div className="w-48 h-48 md:w-80 mx-auto md:h-[450px] bg-cover bg-center">
        <img src="/assets/images/home.gif" className="h-full w-full object-cover " />
      </div>
    </div>
  </div>
  )
}

export default JourneySection