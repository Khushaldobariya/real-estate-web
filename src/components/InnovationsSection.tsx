import React from 'react'
import { VectorIcon } from '../utils/icons.tsx'
import { ServiceData } from '../utils/consents.ts'

const InnovationsSection = () => {
  return (
    <div className=" px-8 md:px-16 flex flex-col md:flex-row items-center">

    <div className="w-full  md:w-1/2">
        <img 
            className="object-cover  w-full h-[400px] md:w-[616px] md:h-[800px]  " 
            src="/assets/images/innovations.webp"  
            alt="Innovations"
            draggable="false" 
        />
    </div>

   
    <div className="w-full md:w-1/2 flex flex-col gap-7 mt-8 md:mt-0 md:pl-10">
        <h2 className="  text-xl md:text-5xl font-medium">Our <span className="text-[#905c87]">Innovations</span></h2>
        <p>
            We prioritize developing innovative solutions that directly address their needs. Our dedicated team is driven by a customer-centric approach, ensuring every product and service we create enhances customer experiences and delivers tangible results.
        </p>

        {/* Service List */}
        <div className="mt-8 space-y-6">
            {ServiceData.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <VectorIcon />
                    </div>
                    <div>
                        <h2 className="text-lg  text-gray-900">{service.title}</h2>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                        <a href={service.link} className="text-[#905c87] text-sm font-medium mt-2 inline-block">
                            Learn more →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

  )
}

export default InnovationsSection
