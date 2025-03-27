
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

      <div className="flex justify-end mt-6 md:mt-10 gap-3 md:gap-4 z-10">
  <button
    ref={prevRef}
    className="border rounded-full border-[#905c87] p-2 md:p-3 lg:p-4 bg-white shadow-md hover:bg-[#f5e6f0] transition"
    onClick={() => swiperRef.current?.slidePrev()}
  >
    <MoveLeft className="text-[#905c87] w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
  </button>
  <button
    ref={nextRef}
    className="border rounded-full border-[#905c87] p-2 md:p-3 lg:p-4 bg-white shadow-md hover:bg-[#f5e6f0] transition"
    onClick={() => swiperRef.current?.slideNext()}
  >
    <MoveRight className="text-[#905c87] w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
  </button>
</div>

    </div>
  );
};

export default SwiperSliderImage;

