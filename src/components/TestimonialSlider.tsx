import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Testimonials } from "../utils/consents.ts";


const TestimonialSlider = () => {
  return (
    <section className="p-10 my-16">
    <div className=" mx-auto ">
      <h2 className="text-2xl font-semibold text-gray-900">
        Hear from our <br/> <span className="text-[#905c87]">Customers</span>
      </h2>
    </div>

    <div className="mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="p-4"
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`p-5 border-2 rounded-md   ${index %2 == 1 ? "bg-[#f5efe1] border-[#905c87]" :"bg-pink-100 border-[#905c87]"}  relative`}>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.role}</p>
              <p className="mt-2 text-gray-800">{item.review}</p>
              <p className="mt-2 text-sm text-gray-500">{item.date}</p>
              {item.rating && (
                <div className="absolute top-3 right-4">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  )
}

export default TestimonialSlider