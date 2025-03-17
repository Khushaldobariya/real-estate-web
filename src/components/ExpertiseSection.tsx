import React from 'react'

const ExpertiseSection = () => {
  return (
    
<div className="bg-pink-100 p-8 flex flex-col items-center px-10">
      <div className=" w-full flex  ">
        <div className="w-2/5">

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Expertise</h2>
        </div>
        <div className='h-3/5 '>

        <p className="text-gray-700 text-md leading-relaxed">
          Established in 1998, Rashmi Group has built a Legacy of Excellence in the Real
          Estate market. Known for Customer Centric Product and quality construction, the
          company has delivered over 14,000 homes. The Group’s Legacy is defined by
          groundbreaking innovation and a steadfast commitment to excellence and homeowner’s
          satisfaction.
        </p>
        </div>
      </div>
      <div className="mt-6 w-full">
      </div>
        <img src="/assets/images/people.png" alt="Expertise Group" className=" shadow-lg w-full" />
    </div>
  )
}

export default ExpertiseSection