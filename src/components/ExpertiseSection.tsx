import React from 'react'

const ExpertiseSection = () => {
  return (
    
<div className="bg-[#ffe9fe]  flex flex-col items-center p-8 md:p-10">
 
      <div className=" w-full flex justify-center  flex-col md:flex-row  items-center">
        <div className="w-full md:w-4/5 ">

        <h2 className="  text-xl md:text-4xl  text-center text-gray-800 mb-4 font-medium">Expertise</h2>
        </div>
        <div className='h-3/5 '>
<div className=" md:w-4/5 ml-auto">

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Established in 1998, Rashmi Group has built a Legacy of Excellence in the Real
          Estate market. Known for Customer Centric Product and quality construction, the
          company has delivered over 14,000 homes. The Group’s Legacy is defined by
          groundbreaking innovation and a steadfast commitment to excellence and homeowner’s
          satisfaction.
        </p>
</div>
        </div>
      </div>
      <div className="mt-6 w-full  md:w-11/12 ">
        <img src="/assets/images/people.png" alt="Expertise Group" className=" shadow-lg w-full" />
      </div>
    </div>
  )
}

export default ExpertiseSection