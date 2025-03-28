
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./gallerySwiper.css";


import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const Gallery = () => {
  return (
   
  //   <section className=" md:px-5 mx-auto text-center" id="gallery">
  //   <h2 className="text-3xl  mb-5 font-medium">Gallery</h2>

  //   <Swiper
  //     effect="coverflow"
  //     grabCursor={true}
  //     centeredSlides={true}
  //     loop={true}
  //     slidesPerView={1}
  //     spaceBetween={30}
  //     coverflowEffect={{
  //       rotate: 0,
  //       stretch: 50,
  //       depth: 100,
  //       modifier: 1.5,
  //       slideShadows: false,
  //     }}
  //     pagination={{ clickable: true }}
  //     modules={[EffectCoverflow, Pagination]}
  //     breakpoints={{
  //       640: { slidesPerView: 2 },
  //       768: { slidesPerView: 3 },
  //       1024: { slidesPerView: 3 },
  //       1280: { slidesPerView: 3 },
  //     }}
  //     className="swiper-container "
  //   >
  //     {[1, 2, 3, 4, 2, 3, 1].map((num, index) => (
  //       <SwiperSlide key={index} className="relative ">
  //         <img
  //           src={`/assets/images/gallery/gallery${num}.webp`}
  //           alt={`Gallery ${num}`}
  //           className="rounded-xl object-cover w-[800px] h-[400px] mx-auto"
  //         />
  //       </SwiperSlide>
  //     ))}
  //   </Swiper>

  //   <div className="relative flex justify-between items-center mt-4">
  //     <button className="swiper-button-prev p-2 bg-gray-100 rounded-full shadow-md">
  //       <MoveLeft size={24} />
  //     </button>
  //     <button className="swiper-button-next p-2 bg-gray-100 rounded-full shadow-md">
  //       <MoveRight size={24} />
  //     </button>
  //   </div>
  // </section>
<section className="container  px-4 md:px-6 lg:px-8 mx-auto text-center" id="gallery">
  <h2 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl tracking-wide mb-6 lg:mb-8">
    Gallery
  </h2>

  <div className="relative py-7">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={-1245}       // Adjust to control peek amount
    
      // coverflowEffect={{
      //   rotate: 0,            // No tilt (keep images flat)
      //   stretch: -40,         // Negative = overlap slides (key for peek effect)
      //   depth: 200,           // Depth of hidden slides (lower = subtler peek)
      //   modifier: 2,          // Intensity (higher = more overlap)
      //   slideShadows: false,  // Disable shadows for clean look
      // }}
      // breakpoints={{
      //   320: { // Mobile
      //     slidesPerView:1.5,
      //     spaceBetween: -80,
      //     coverflowEffect: { rotate: 0, depth: 50 }
      //   },
      //   425:{
      //     slidesPerView:2.1,
      //     spaceBetween: -100,
      //     coverflowEffect: { rotate: 0, depth: 50 }
      //   },
      //   768: { 
      //     slidesPerView:2.3,
      //     spaceBetween: -380,
      //     coverflowEffect: { rotate: 5, depth: 300 }
      //   },
      //   1024: { // Desktop
      //     coverflowEffect: { rotate: 10, depth: 400 }
      //   }
      // }}

      
// spaceBetween={-300}  // Base value for large screens (matches your -1245 effect)

coverflowEffect={{
  rotate: 0,
  stretch: -40,
  depth: 200,
  modifier: 2,
  slideShadows: false,
}}

breakpoints={{
  // Small mobile (under 400px)
  320: {
    slidesPerView:1.3,
    spaceBetween: -80,
    coverflowEffect: {
      stretch: -20,
      depth: 50,
      modifier: 1
    }
  },
  
  // Larger mobile (400-640px)
  400: {
    spaceBetween: -120,
    coverflowEffect: {
      stretch: -25,
      depth: 75,
      modifier: 1.2
    }
  },
  
  // Small tablets (640-768px)
  640: {
    spaceBetween: -160,
    coverflowEffect: {
      stretch: -30,
      depth: 100,
      modifier: 1.5
    }
  },
  
  // Tablets (768-1024px)
  768: {
    spaceBetween: -200,
    coverflowEffect: {
      stretch: -35,
      depth: 150,
      modifier: 1.8
    }
  },
  
  // Small laptops (1024-1280px)
  1024: {
    spaceBetween: -950,
    coverflowEffect: {
      stretch: -38,
      depth: 180,
      modifier: 2
    }
  },
  
  // Large laptops/desktops (1280px+)
  1280: {
    
    spaceBetween: -1245,
    coverflowEffect: {
      rotate: 0,            // No tilt (keep images flat)
        stretch: 0,         // Negative = overlap slides (key for peek effect)
        depth: 200,           // Depth of hidden slides (lower = subtler peek)
        modifier: 2, 
    }
  },
  
  // Extra large screens (if needed)
  1600: {
    spaceBetween: -350,
    coverflowEffect: {
      rotate: 0,            // No tilt (keep images flat)
        stretch: -40,         // Negative = overlap slides (key for peek effect)
        depth: 200,           // Depth of hidden slides (lower = subtler peek)
        modifier: 2, 
    }
  }
}}
      modules={[EffectCoverflow, Pagination, Navigation]}
    
      
      className=""
    >
      {[1, 2, 3, 4, 2, 3, 1].map((num, index) => (
        <SwiperSlide key={index} className="relative swiper-slide-gallery">
         <img
  src={`/assets/images/gallery/gallery${num}.webp`}
  alt={`Gallery ${num}`}
  className="rounded-xl object-cover w-[800px] h-[400px] mx-auto"
/>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="pr-10 custom-pagination absolute right-4 bottom-4 flex flex-col items-end gap-2"></div>


    {/* Navigation Buttons */}
    <div className="flex justify-center items-center gap-6 mt-4">
      <button className="swiper-button-prev p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition">
        <MoveLeft size={24} />
      </button>
      <button className="swiper-button-next p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition">
        <MoveRight size={24} />
      </button>
    </div>
  </div>
</section>


  );
};

export default Gallery;

