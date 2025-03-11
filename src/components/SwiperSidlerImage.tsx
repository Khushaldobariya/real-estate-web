// import React from 'react'
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import { MoveLeft, MoveRight } from 'lucide-react';

// const SwiperSidlerImage = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   return (

// <div className="my-16">
// <Swiper
//   spaceBetween={0}
//   slidesPerView={1}
//   loop={true}
//   autoplay={{ delay: 5000 }}
//   navigation={{
//     prevEl: prevRef.current,
//     nextEl: nextRef.current,
//   }}
//   onInit={(swiper) => {
//     swiper.params.navigation.prevEl = prevRef.current;
//     swiper.params.navigation.nextEl = nextRef.current;
//     swiper.navigation.init();
//     swiper.navigation.update();
//   }}
//   modules={[Navigation, Autoplay]}
// >
//   <SwiperSlide>
//     <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
//   </SwiperSlide>
// </Swiper>


// <div className="justify-end flex gap-5 z-10">
//   <button ref={prevRef} className="border rounded-full border-[#905c87] p-2">
//     <MoveLeft className="hover:text-[#905c87]" />
//   </button>
//   <button ref={nextRef} className="border rounded-full border-[#905c87] p-2">
//     <MoveRight className="hover:text-[#905c87]" />
//   </button>
// </div>
// </div>

//   )
// }

// export default SwiperSidlerImage

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const SwiperSliderImage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="my-16 relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        <SwiperSlide>
          <img
            src="/assets/images/add.png"
            alt="add"
            className="w-full min-h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/add.png"
            alt="add"
            className="w-full min-h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/add.png"
            alt="add"
            className="w-full min-h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>


      <div className=" justify-end mt-10 flex gap-4 z-10">
        <button
          ref={prevRef}
          className="border rounded-full border-[#905c87] p-3 bg-white shadow-md"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MoveLeft className="text-[#905c87]" />
        </button>
        <button
          ref={nextRef}
          className="border rounded-full border-[#905c87] p-3 bg-white shadow-md"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MoveRight className="text-[#905c87]" />
        </button>
      </div>
    </div>
  );
};

export default SwiperSliderImage;
