

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./gallerySwiper.css";

import { EffectCoverflow, Pagination, Navigation ,Autoplay  } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const Gallery = () => {
  return (
    <section
      className="container  px-4 md:px-6 lg:px-8 mx-auto text-center"
      id="gallery"
    >
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
          spaceBetween={-250} 
          // autoplay={{
          //   delay: 3000, 
          //   disableOnInteraction: false,
          // }}

          coverflowEffect={{
            rotate: 0, 
            stretch: 0, 
            depth: 300, 
            modifier: 0,
            slideShadows: true,
          }}
          breakpoints={{
          
            320: {
              slidesPerView: 1.5,
              spaceBetween: -130,
              coverflowEffect: {
                rotate: 0, 
                stretch: 0, 
                depth: 300,
                modifier: 3,
              },
            },

            // Larger mobile (375-640px)
            375: {
              slidesPerView: 1.3,
              spaceBetween: -70,
              coverflowEffect: {
                stretch: -25,
                depth: 75,
                modifier: 1.2,
              },
            },

            // Small tablets (640-768px)
            640: {
              slidesPerView: 1.4,
              spaceBetween: -290,
              coverflowEffect: {
                rotate: 0, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 325, // Depth of hidden slides (lower = subtler peek)
                modifier: 1.5,
              },
            },

            // Tablets (768-1024px)
            768: {
              slidesPerView: 1.3,
              spaceBetween: -500,
              coverflowEffect: {
                rotate: 0, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 550, // Depth of hidden slides (lower = subtler peek)
                modifier: 1.6,
              },
            },

            // Small laptops (1024-1280px)
            1024: {
              slidesPerView: 1.2,
              spaceBetween: -360,
              coverflowEffect: {
                rotate: 0, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 395, // Depth of hidden slides (lower = subtler peek)
                modifier: 1.8,
              },
            },

           
            1280: {
              slidesPerView: 1.2,
              spaceBetween: -1005,
              coverflowEffect: {
                rotate: 10, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 408, // Depth of hidden slides (lower = subtler peek)
                modifier: 2,
              },
            },
            1360: {
              slidesPerView: 1.2,
              spaceBetween: -1072,
              coverflowEffect: {
                rotate: 10, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 218, // Depth of hidden slides (lower = subtler peek)
                modifier: 2,
              },
            },

            // Extra large screens (if needed)
            1600: {
              slidesPerView: 1.8,
              spaceBetween: -350,
              coverflowEffect: {
                rotate: 0, // No tilt (keep images flat)
                stretch: 0, // Negative = overlap slides (key for peek effect)
                depth: 200, // Depth of hidden slides (lower = subtler peek)
                modifier: 1.8,
              },
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation ,Autoplay ]}
          className="bg-transparent"
        >
                {[1, 2, 3, 4, 2, 3, 1,2].map((num, index) => (
         <SwiperSlide key={index} className="relative ">
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

export default Gallery;
