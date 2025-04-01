import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Testimonials } from "../utils/consents.ts";

const TestimonialSlider = () => {
  return (
    <section className="px-4 md:px-10  relative overflow-x-hidden  ">
      <div className="mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-medium text-gray-900 leading-[1.4] md:leading-[1.6] lg:leading-[74px]">
          Hear from our <span className="block text-[#9f238a]">Customers</span>
        </h2>
      </div>

      <div className="mt-6 mx-auto my-12 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // loop={true}
          // autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1140: { slidesPerView: 3 },
          }}
          className="p-4"
        >
          {Testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-5 border-2 sm:h-[290px]  md:h-[310px] lg:h-[330px] rounded-md ${
                  index % 2 === 1
                    ? "bg-[#C69E58]/50 border-[#C69E58]"
                    : "bg-[#FEE9FE7D]/50 border-[#9F238B] "
                } relative`}
              >
                <h3 className="text-lg xl:text-xl">{item.name}</h3>
                <p className="text-base">{item.role}</p>
                <p className="mt-8 text-lg xl:text-xl pe-16">{item.review}</p>
                <p className="mt-2 text-sm text-gray-500 absolute bottom-4">{item.date}</p>
                {item.rating && (
                  <div className="absolute top-3 right-4">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                    <p className="mt-2 text-sm">{item.date}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pr-10  custom-pagination absolute right-4 bottom-4 flex flex-col items-end gap-2"></div>
      </div>
    </section>

    //     <section className="px-4 md:px-8 lg:px-12 relative overflow-x-hidden">
    //   <div className="container mx-auto">

    //     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl   font-medium  tracking-wide text-gray-900 leading-loose md:leading-snug ">
    //       Hear from our <br />
    //       <span className="text-[#905c87]">Customers</span>
    //     </h2>

    //     <div className="mt-6 mx-auto my-12">
    //       <Swiper
    //         modules={[Navigation, Pagination, Autoplay]}
    //         spaceBetween={20}
    //         slidesPerView={1}
    //         loop={true}
    //         autoplay={{ delay: 3000 }}
    //         pagination={{
    //           clickable: true,
    //           el: '.custom-pagination',
    //         }}
    //         breakpoints={{
    //           640: { slidesPerView: 1 },
    //           768: { slidesPerView: 2 },
    //           1024: { slidesPerView: 3 },
    //         }}
    //         className="p-4"
    //       >
    //         {Testimonials.map((item, index) => (
    //           <SwiperSlide key={index}>
    //             <div className={`p-5 border-2 sm:h-[290px] lg:w-[460px] lg:h-[330px] rounded-md ${index % 2 === 1 ? "bg-[#f5efe1] border-[#905c87]" : "bg-pink-100 border-[#905c87]"} relative`}>
    //               <h3 className="text-lg sm:text-xl md:text-2xl">{item.name}</h3>
    //               <p className="text-base text-black/60">{item.role}</p>
    //               <p className="mt-6 text-sm sm:text-base lg:text-lg">{item.review}</p>
    //               <p className="mt-2 text-xs sm:text-base text-black/60">{item.date}</p>
    //               {item.rating && (
    //                 <div className="absolute top-3 right-4">
    //                   {"★".repeat(item.rating)}
    //                   {"☆".repeat(5 - item.rating)}
    //                   <p className="mt-2 text-xs sm:text-sm">{item.date}</p>
    //                 </div>
    //               )}
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>

    //       <div className="pr-10 custom-pagination absolute right-4 bottom-4 flex flex-col items-end gap-2"></div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default TestimonialSlider;
