import React from 'react'



const CurrentProjects = () => {
  return (



<section className="py-16 px-4 md:px-16">
    <div className="flex flex-col md:flex-row mx-auto gap-8">
       
        <div className="md:w-1/4 space-y-6 text-center md:text-left flex  flex-col justify-center">
            <div className="space-y-4 ">
                <h2 className="font-semibold text-lg md:text-xl">Current Projects</h2>
                <p className="text-sm md:text-base">
                    Explore our wide range of residential and commercial properties and discover your perfect home.
                </p>
            </div>
            <button className="w-48 md:w-56 h-12 bg-[#a1228b] text-white hover:border hover:border-[#a1228b] transition-all ease-in-out delay-150">
                View All Projects
            </button>
        </div>


        <div className="md:w-3/4 flex flex-col md:flex-row gap-6 justify-end">
         
            <div className="flex flex-col gap-6 items-center md:items-end">
                <img src="/assets/images/project/project2.webp" 
                     className="w-full max-w-[390px] h-auto object-cover " 
                     alt="Project 2" />
                <img src="/assets/images/project/project4.webp" 
                     className="w-full max-w-[450px] h-auto object-cover " 
                     alt="Project 4" />
            </div>

            <div className="flex flex-col gap-6 items-center md:items-start">
                <img src="/assets/images/project/project3.webp" 
                     className="w-full max-w-[390px] h-auto object-cover " 
                     alt="Project 3" />
                <img src="/assets/images/project/project1.webp" 
                     className="w-full max-w-[390px] h-auto object-cover " 
                     alt="Project 1" />
            </div>
        </div>
    </div>
</section>

  )
}

export default CurrentProjects


{/* <section className="py-16">
    <div className="flex px-16 mx-auto  ">
        <div className="w-1/4 space-y-6">
        <div className="space-y-6"><h2 className="font-semibold text-md md:text-xl ">Current Projects</h2>
        <p>Explore our wide range of residential and commercial properties and discover your perfect home.</p></div>
        <button className="w-56 h-12 bg-[#a1228b] text-white hover:border hover:border-[#a1228b] transition-all ease-in-out delay-150">View All Project</button>
        </div>
        <div className="w-3/4 flex gap-6  justify-end">

      <div className=" flex flex-col gap-y-6 items-end"> 
      <img src="/assets/images/project/project2.webp" className="w-[390px] h-[460px] object-cover "/>
      <img src="/assets/images/project/project4.webp" className="w-[450px] h-[300px] object-cover "/>
      </div>
      <div className=" flex flex-col gap-y-6">
      <img src="/assets/images/project/project3.webp" className="w-[390px] h-[300px] object-cover "/>
      <img src="/assets/images/project/project1.webp" className="w-[390px] h-[360px] object-cover "/>
      </div>
       </div>
    </div>
</section> */}