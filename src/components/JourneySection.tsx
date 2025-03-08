import React from 'react'

const JourneySection = () => {
  return (
    <div className="  my-16 px-10 relative flex justify-between items-center">
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Our Journey Towards{" "}
        <span className="text-[#905c87]">Excellence!</span>
      </h2>
      <p className="text-black mt-4 text-base" >   Immensely grateful for the journey we&apos;ve undertaken together, reaching this far with your unwavering support. Our story wouldn&apos;t be complete without you. We consider ourselves blessed for the opportunity to deliver your dream home and be a part of your journey.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8 text-[#905c87] text-xl font-semibold">
        <div>
          <span className="text-3xl">25</span>
          <p className="text-black text-base">Years</p>
        </div>
        <div>
          <span className="text-3xl">14K+</span>
          <p className="text-black text-base">Customers</p>
        </div>
        <div>
          <span className="text-3xl">07</span>
          <p className="text-black text-base">Cities</p>
        </div>
        <div>
          <span className="text-3xl">1CR</span>
          <p className="text-black text-base">Landbank</p>
        </div>
      </div>
    </div>

    {/* House Shape Image */}
    <div className="relative hidden md:block">
      <div className="w-48 h-48 md:w-64 md:h-64 bg-cover bg-center">
        <img src="/assets/images/home.gif" className="h-full object-cover " />
      </div>
    </div>
  </div>
  )
}

export default JourneySection