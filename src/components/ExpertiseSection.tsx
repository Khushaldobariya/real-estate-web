import React from 'react'

const ExpertiseSection = () => {
  return (
    
<section className="flex flex-col md:flex-row  gap-6  mb-16 ">
   
      <div className="flex gap-3 w-full md:w-1/5  ">
        <img src="/assets/images/building.png"  alt="Building" className="w-32 h-4/5 mb-4 object-cover -mt-" />
        <h2 className="text-2xl font-semibold m-auto">Expertise</h2>
      </div>
      

      <div className="w-full md:w-4/5 p-6 bg-pink-100  ">
        <div className="p-4  w-4/5 ml-auto flex justify-end ">
          <p className="text-gray-700 max-w-4xl">Established in 1998, Rashmi Group has built a Legacy of Excellence in the Real Estate market. Known for Customer Centric Product and quality construction, the company has delivered over 14,000 homes. The Group’s Legacy is defined by groundbreaking innovation and a steadfast commitment to excellence and home-owner’s satisfaction.</p>
        </div>
        <img src="/assets/images/people.png"  alt="Team" className="w-full object-cover" />
      </div>
    </section>
  )
}

export default ExpertiseSection