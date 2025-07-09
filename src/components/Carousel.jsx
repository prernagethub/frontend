// src/components/AmazonStyleCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Use Pagination instead of Navigation
import "swiper/css";
import "swiper/css/pagination"; // ✅ Pagination styles

const images = [
  "https://images-static.nykaa.com/uploads/fe9bef82-2c22-4915-89ac-c7474ed8c51b.jpg?tr=cm-pad_resize,w-1800",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/16727128e6a5b4ce.jpeg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/38cac1df60914146.jpeg?q=60",
];

const Carousel = () => (
  <div className="w-full relative h-40 sm:h-56 md:h-72 lg:h-[350px] overflow-hidden">
    <Swiper
      modules={[Autoplay, Pagination]} // ✅ updated
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }} // ✅ dots
      slidesPerView={1}
      className="w-full h-full">
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`banner ${idx}`}
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ Bottom White Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-20 crousal-gradient z-10 pointer-events-none" />
  </div>
);

export default Carousel;
