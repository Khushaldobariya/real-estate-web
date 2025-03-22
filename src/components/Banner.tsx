
import React from "react";
import SearchBar from "./searchBar/SearchBar.tsx";
import Navbar from "./Navbar.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MobileSearchBar from "./searchBar/MobileSearchBar.tsx";

const Banner = () => {
  return (
    <div className="relative w-full h-[797px]">

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar isHome={true} />
      </div>


      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 22000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-screen"
      >
        {/* YouTube Video Slide */}
        <SwiperSlide className="relative w-full h-full ">
          <div className="w-full h-full relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/0sDRF-hErHI?si=IqWMHiaubaK5SS1G&autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

    
        <SwiperSlide className="relative w-full h-screen">
          <video
            playsInline
            loop
            src="/assets/video/banner.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        </SwiperSlide>


        <SwiperSlide className="relative w-full h-screen">
          <img
            src="/assets/images/img1.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

    
      <div
        className="absolute w-full p-4 z-10 
                top-28 left-1/2 -translate-x-1/2 
                md:left-auto md:-bottom-16 md:top-auto md:translate-x-0"
      >
        <MobileSearchBar />
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
