import React from 'react'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from 'lucide-react';

const SwiperSidlerImage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (

<div className="my-16">
<Swiper
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 5000 }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }}
  modules={[Navigation, Autoplay]}
>
  <SwiperSlide>
    <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/assets/images/add.png" alt="add" className="w-full min-h-screen object-cover" />
  </SwiperSlide>
</Swiper>


<div className="justify-end flex gap-5 z-10">
  <button ref={prevRef} className="border rounded-full border-[#905c87] p-2">
    <MoveLeft className="hover:text-[#905c87]" />
  </button>
  <button ref={nextRef} className="border rounded-full border-[#905c87] p-2">
    <MoveRight className="hover:text-[#905c87]" />
  </button>
</div>
</div>

  )
}

export default SwiperSidlerImage