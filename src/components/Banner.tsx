import React from 'react'
import SearchBar from './SearchBar.tsx'
import Navbar from './Navbar.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'


const Banner = () => {
  return (
    <>

   <div className="relative w-full ">

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar isHome={true}  />
      </div>

      <Swiper spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 5000 }}>
        <SwiperSlide>
          <img src="/assets/images/banner.png" alt="banner" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/banner.png" alt="banner" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/banner.png" alt="banner" className="w-full h-screen object-cover" />
        </SwiperSlide>
      </Swiper>


      <div className="absolute top-1/3 left-10 text-white z-10">
        <h2 className="text-4xl font-light">Delivering</h2>
        <h1 className="text-6xl font-bold">
          <span className="text-[#905c87]">Happiness</span>
        </h1>
        <p className="text-lg mt-2">Since 1998</p>
      </div>


      <div className="absolute bottom-0 w-full   p-4 z-10">
        <SearchBar />
      </div>
    </div>
    </>
  )
}

export default Banner