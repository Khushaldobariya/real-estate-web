import React from "react";
import SearchBar from "./searchBar/SearchBar.tsx";
import Navbar from "./Navbar.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import MobileSearchBar from "./searchBar/MobileSearchBar.tsx";

const Banner = () => {
  return (
    <>
      <div className="relative w-full ">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar isHome={true} />
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 7000 }}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          <SwiperSlide>
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className="w-full h-screen object-cover"
            />
                <div className="absolute top-1/3 left-10 text-white z-10">
          <h2 className="text-4xl font-light">Delivering</h2>
          <h1 className="text-6xl font-bold">
            <span className="text-[#905c87]">Happiness</span>
          </h1>
          <p className="text-lg mt-2">Since 1998</p>
        </div>
          </SwiperSlide>
          <SwiperSlide>
            <video
            
            playsInline
              loop
              src="/assets/video/banner.mp4"
              autoPlay
              
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
          <video
          playsInline
              loop
              src="/assets/video/banner1.mp4"
              autoPlay
           
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        </Swiper>

    
        <div className="absolute w-full p-4 z-10 
                top-24 left-1/2 -translate-x-1/2 
                md:left-auto md:bottom-0 md:top-auto md:translate-x-0">
  <MobileSearchBar />
  <SearchBar />
</div>
      </div>
    </>
  );
};

export default Banner;
