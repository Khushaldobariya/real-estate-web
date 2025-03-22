import React from 'react'
import { VectorIcon } from '../utils/icons.tsx'
import { ServiceData } from '../utils/consents.ts'
import { ChevronRight } from 'lucide-react'

const InnovationsSection = () => {
  return (


<div className="container pr-0 px-4 md:px-0  md:pr-14 flex flex-col gap-x-6  md:flex-row items-center">
  <div className="w-full md:w-1/2 flex justify-center md:justify-end  pr-0 md:pr-10">
    <img 
      className="object-cover w-full h-[400px] md:w-[616px] md:h-[800px]" 
      src="/assets/images/innovations.webp"  
      alt="Innovations"
      draggable="false" 
    />
  </div>

  <div className="w-full md:w-1/2 flex justify-start flex-col gap-7 mt-10 md:mt-2">
    <h2 className="text-xl md:text-5xl font-medium">
      Our <span className="text-[#aa1d88]">Innovations</span>
    </h2>
    <p className="text-base md:text-lg text-center">
      We prioritize developing innovative solutions that directly address their needs. Our dedicated team is driven by a customer-centric approach, ensuring every product and service we create enhances customer experiences and delivers tangible results.
    </p>

  
    <div className="mt-8 space-y-8">
      {ServiceData.map((service, index) => (
        <div key={index} className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <VectorIcon />
          </div>
          <div className="space-y-6">
            <div className="space-y-5">
              <h2 className="text-lg md:text-2xl text-gray-900">{service.title}</h2>
              <hr className="border border-black w-[125px]" />
            </div>
            <p className="text-sm md:text-base">{service.description}</p>
            <a href={service.link} className="items-center flex gap-4 text-sm md:text-base font-medium mt-4 ">
              Learn more  
              <ChevronRight size={16} />
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


//     <div className=" px-8 md:px-16 flex flex-col md:flex-row items-center">

//     <div className="w-full  md:w-1/2">
//         <img 
//             className="object-cover  w-full h-[400px] md:w-[616px] md:h-[800px]  " 
//             src="/assets/images/innovations.webp"  
//             alt="Innovations"
//             draggable="false" 
//         />
//     </div>

   
//     <div className="w-full md:w-1/2 flex flex-col gap-7 mt-8 md:mt-0">
//         <h2 className="  text-xl md:text-5xl font-medium">Our <span className="text-[#905c87]">Innovations</span></h2>
//         <p className=" text-base md:text-lg text-center">
//             We prioritize developing innovative solutions that directly address their needs. Our dedicated team is driven by a customer-centric approach, ensuring every product and service we create enhances customer experiences and delivers tangible results.
//         </p>

//         {/* Service List */}
//         <div className="mt-8 space-y-6">
//             {ServiceData.map((service, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                     <div className="flex-shrink-0">
//                         <VectorIcon />
//                     </div>
//                     <div className="space-y-6">
//     <div className="w-fit space-y-5">
//         <h2 className="text-lg text-gray-900">{service.title}</h2>
//         <hr className="border border-black w-full" />
//     </div>
//     <p className="text-gray-600 text-sm">{service.description}</p>
//     <a href={service.link} className="text-[#905c87] text-sm font-medium mt-2 inline-block">
//         Learn more →
//     </a>
// </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>
{/* <div className="px-8   flex flex-col gap-4 md:gap-10 md:flex-row items-center ">

<div className="w-full md:w-1/2 flex justify-end">
    <img 
        className="object-cover w-full h-[400px] md:w-[616px] md:h-[800px]" 
        src="/assets/images/innovations.webp"  
        alt="Innovations"
        draggable="false" 
    />
</div>

<div className="w-full md:w-1/2 flex justify-start flex-col gap-7 mt-8 md:mt-0">
    <h2 className="text-xl md:text-5xl font-medium">
        Our <span className="text-[#aa1d88]">Innovations</span>
    </h2>
    <p className="text-base md:text-lg text-center">
        We prioritize developing innovative solutions that directly address their needs. Our dedicated team is driven by a customer-centric approach, ensuring every product and service we create enhances customer experiences and delivers tangible results.
    </p>


    <div className="mt-8 space-y-8">
        {ServiceData.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <VectorIcon />
                </div>
                <div className="space-y-6">
                    <div className=" space-y-5">
                        <h2 className="text-lg md:text-2xl text-gray-900">{service.title}</h2>
                        <hr className="border border-black w-[125px]" />
                    </div>
                    <p className=" text-sm md:text-base">{service.description}</p>
                    <a href={service.link} className="items-center flex gap-4 text-sm md:text-base font-medium mt-4 ">
                        Learn more  
                        <ChevronRight size={16} />
                    </a>
                </div>
            </div>
        ))}
    </div>
</div>
</div> */}