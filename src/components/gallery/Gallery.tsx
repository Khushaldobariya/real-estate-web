
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
<section className="container px-4 md:px-6 lg:px-8 mx-auto text-center" id="gallery">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-8">
    Gallery
  </h2>

  <div className="relative">
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
      }}
      pagination={{
        clickable: true, // Enables pagination dots
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
      }}
      className="swiper-container"
    >
      {[1, 2, 3, 4, 2, 3, 1].map((num, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={`/assets/images/gallery/gallery${num}.webp`}
            alt={`Gallery ${num}`}
            className="rounded-xl object-cover w-full max-w-[800px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination Dots */}
    <div className="swiper-pagination mt-6"></div>

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

