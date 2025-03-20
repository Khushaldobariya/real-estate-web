import { ChevronRight } from 'lucide-react'
import React from 'react'

const KnowMore = () => {
  return (
    <section className="space-y-8 px-4 md:px-10 lg:px-16 xl:px-20">
    <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">
      Know More About Us
    </h3>
    <div className="border border-black flex flex-col md:flex-row md:h-[500px]">
      {/* Left Side (Video Thumbnail or Placeholder) */}
      <div className="w-full md:w-1/2 border-r border-black bg-black/40 h-48 md:h-auto flex items-center justify-center">
        {/* You can place an image or video thumbnail here */}
        <p className="text-white text-lg">Video Placeholder</p>
      </div>

      {/* Right Side (Video Details) */}
      <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-between">
        <div className="space-y-2 md:space-y-4">
          <p className="text-sm md:text-base">5 mins</p>
          <p className="text-lg md:text-xl font-medium">Video Title</p>
          <p className="text-sm md:text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros.
          </p>
          <p className="text-sm md:text-base text-gray-500">1 month ago</p>
        </div>

        <div className="flex items-center gap-4 md:gap-6 hover:underline font-medium cursor-pointer">
          <p>Subscribe Now</p>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default KnowMore