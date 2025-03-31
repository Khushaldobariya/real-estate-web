import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import MobileSearchBar from "../searchBar/MobileSearchBar.tsx";

const MobileBanner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 220000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-screen"
      >
        <SwiperSlide className="relative w-full h-full">
          <div className="relative w-full h-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5]"
              src="https://www.youtube.com/embed/0sDRF-hErHI?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=0sDRF-hErHI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <video
            playsInline
            loop
            src="/assets/video/banner.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover scale-[1.5]"
          />
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-screen">
          <img
            src="/assets/images/img1.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-6 top-1/2 text-xl space-y-5 -translate-y-1/2">
            <p className="text-black/60 font-medium tracking-wider text-lg">
              Delivering{" "}
            </p>
            <h2 className="text-transparent font-medium tracking-wider bg-clip-text bg-gradient-to-r from-pink-400 to-white l">
              Happiness
            </h2>
            <p className="text-black/60 font-medium tracking-wider text-lg">
              Since 1998
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="pr-10 custom-pagination absolute right-4 bottom-4 flex flex-col items-end gap-2"></div>

      <div className="absolute w-full p-4 z-10 top-28 left-1/2 -translate-x-1/2">
        <MobileSearchBar />
      </div>
    </div>
  );
};

export default MobileBanner;