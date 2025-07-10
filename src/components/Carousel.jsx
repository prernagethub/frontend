import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://content.asos-media.com/-/media/homepages/mw/2025/june/30-apac-mena-row/mw/hero/hp_mw_hero_wk44-45_2880x1280_row.jpg",
  "https://content.asos-media.com/-/media/homepages/ww/2025/june/30-apac-mena-row/ww/hero/hp_ww_hero_wk44-45_2880x1280_row.jpg",
];

const Carousel = () => (
  <div className="w-full h-[85vh] mt-0.5 mb-6 overflow-hidden px-4">
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="w-full h-full rounded-xl"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`banner ${idx}`}
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Optional: Bottom Gradient */}
    <div />
  </div>
);

export default Carousel;
