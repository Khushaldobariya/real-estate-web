
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import SwiperCore from "swiper";
import { NavigationOptions } from "swiper/types";
import { Home_Images_SLider } from "../utils/consents.ts";

// Image data array

const SwiperSliderImage: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const navigation = swiper.params.navigation as NavigationOptions;
      if (navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  return (
    <div className=" relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
     
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      >
        {Home_Images_SLider.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[650px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="justify-end mt-10 flex gap-4 z-10">
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

