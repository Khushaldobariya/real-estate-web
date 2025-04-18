import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import SearchBar from "../searchBar/SearchBar.tsx";

const DesktopBanner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 220000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ 
            clickable: true,
            el: '.custom-pagination', 
          }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-screen"
      >
        <SwiperSlide className="relative w-full min-h-screen">
          <div className="relative w-full min-h-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5]"
              src="https://www.youtube.com/embed/0sDRF-hErHI?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playlist=0sDRF-hErHI&loop=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full min-h-screen">
          <video
            playsInline
            loop
            src="/assets/video/banner.mp4"
            autoPlay={true}
            muted={true}
            preload="auto"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="relative w-full min-h-screen">
          <img
            src="/assets/images/img1.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-6 top-1/2 text-xl md:text-3xl lg:text-5xl space-y-5 -translate-y-1/2 ">
            <p className="text-black/60 font-medium md:font-bold  tracking-wider text-lg md:text-2xl lg:text-3xl">
              Delivering{" "}
            </p>
            <h2 className="text-transparent font-medium md:font-bold  tracking-wider bg-clip-text bg-gradient-to-r from-pink-400 to-white l">
              Happiness
            </h2>
            <p className="text-black/60 font-medium md:font-bold  tracking-wider text-lg md:text-2xl lg:text-3xl">
              Since 1998
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="pr-10 custom-pagination absolute right-4 bottom-4 flex flex-col items-end gap-2"></div>

      <div
        className="absolute w-full p-4 z-10 
          bottom-0 left-1/2 -translate-x-1/2 
          md:-bottom-20 lg:-bottom-20 xl:-bottom-[4.5rem] 2xl:-bottom-16 3xl:-bottom-56"
      >
        <SearchBar />
      </div>
    </div>
  );
};

export default DesktopBanner;
