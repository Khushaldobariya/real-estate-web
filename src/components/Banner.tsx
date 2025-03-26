import React, { useEffect, useRef } from "react";
import SearchBar from "./searchBar/SearchBar.tsx";
import Navbar from "./Navbar.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import MobileSearchBar from "./searchBar/MobileSearchBar.tsx";

const Banner = () => {



  return (
    <section className="relative    w-full h-[450] lg:h-[797px]">
      {/* <div className="absolute top-0 left-0 w-full z-50">
        <Navbar isHome={true} />
      </div> */}

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
          <SwiperSlide className="relative w-full h-full ">
     <div className="fixed top-0 left-0 w-screen h-screen">
  <iframe 
    id="youtube-player"
    className="absolute top-0 left-0 w-full h-full" 
    src="https://www.youtube.com/embed/0sDRF-hErHI?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1&fs=1&playsinline=1" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
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
                top-28 left-1/2 -translate-x-1/2 
                md:left-auto md:-bottom-16 lg:-bottom-16D md:top-auto md:translate-x-0"
        >
          <MobileSearchBar />
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Banner;
