


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./gallerySwiper.css";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import { MoveLeft, MoveRight } from "lucide-react";

// const Gallery = () => {
//   return (
//     <div className="container mx-auto text-center">
//       <h2 className="text-[#905c87] text-2xl font-bold mb-5">Gallery</h2>
      
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"} 
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: false,
//         }}
//         navigation={true} // Enable default Swiper navigation buttons
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src="/assets/image/gallery/gallery1.png" draggable="false" alt="gallery" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/image/gallery/gallery2.png" draggable="false" alt="gallery" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/image/gallery/gallery3.png" draggable="false" alt="gallery" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/image/gallery/gallery4.png" draggable="false" alt="gallery" />
//         </SwiperSlide>

//         {/* Custom Navigation Buttons */}
//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <MoveLeft />
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <MoveRight />
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="swiper-pagination"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default Gallery;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./gallerySwiper.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const Gallery = () => {
  return (
    <div className="px-14 mx-auto text-center overflow-hidden">
      <h2 className=" text-3xl mb-5">Gallery</h2>
      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}  
        spaceBetween={-80} 
        loopAdditionalSlides={2} 
        coverflowEffect={{
          rotate: 0,
          stretch: 50, 
          depth: 100,
          modifier: 2.5,
          slideShadows: false, 
        }}
        navigation={false} 
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery1.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery2.png" draggable="false" alt="gallery" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery1.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery3.png" draggable="false" alt="gallery" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery4.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery4.png" draggable="false" alt="gallery" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/gallery/gallery3.png" draggable="false" alt="gallery" className="rounded-2xl" />
        </SwiperSlide>

        {/* Custom Navigation Buttons */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <MoveLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <MoveRight />
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Gallery;
