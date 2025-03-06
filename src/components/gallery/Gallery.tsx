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
//     <div className="px-14 mx-auto text-center overflow-hidden">
//       <h2 className=" text-3xl mb-5">Gallery</h2>
      
//       <Swiper

//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={3}  
//         spaceBetween={-80} 
//         loopAdditionalSlides={2} 
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 50, 
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: false, 
//         }}
//         navigation={false} 
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}

//         breakpoints={{
//           576: {
//             width: 576,
//             slidesPerView: 1,
//           },
//           768: {
//             width: 768,
//             slidesPerView: 2,
//           },
//             968:{
//               width:968,
//               sildsPerView:2,
//             },
//             1080:{
//               width:10280,
//               slidePerView:3
//             },
//             1120:{
//               width:1080,
//               sliderPreView:4
//             }
//           }
//         }
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery1.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery2.png" draggable="false" alt="gallery" className="rounded-2xl" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery1.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery3.png" draggable="false" alt="gallery" className="rounded-2xl" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery4.png" draggable="false" alt="gallery"  className="rounded-2xl"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery4.png" draggable="false" alt="gallery" className="rounded-2xl" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/assets/images/gallery/gallery3.png" draggable="false" alt="gallery" className="rounded-2xl" />
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
    <div className="px-10 mx-auto  text-center">
      <h2 className="text-3xl font-semibold mb-5">Gallery</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="swiper-container "
      >
        {[1, 2, 3, 4, 2,3,1].map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/assets/images/gallery/gallery${num}.png`}
              alt={`Gallery ${num}`}
              className="rounded-xl w-96 h-64 object-cover md:h-96  "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="relative flex justify-between items-center mt-4">
        <button className="swiper-button-prev p-2 bg-gray-100 rounded-full shadow-md">
          <MoveLeft size={24} />
        </button>
        <button className="swiper-button-next p-2 bg-gray-100 rounded-full shadow-md">
          <MoveRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

