
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
    <div className="px-10 mx-auto  text-center  " id="gallery">
      <h2 className="text-3xl font-semibold mb-5">Gallery</h2>

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
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
        className="swiper-container "
      >
        {[1, 2, 3, 4, 2,3,1].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/assets/images/gallery/gallery${num}.webp`}
              alt={`Gallery ${num}`}
              className="rounded-xl w-full h-full object-cover md:h-[400px] md:w-[800px]  "
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="relative flex justify-between items-center mt-4">
        <button className="swiper-button-prev p-2 bg-gray-100 rounded-full shadow-md">
          <MoveLeft size={24} />
        </button>
        <button className="swiper-button-next p-2 bg-gray-100 rounded-full shadow-md">
          <MoveRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

