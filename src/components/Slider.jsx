import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../assets/img/slide1.png";
import { Autoplay } from "swiper/modules";

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={true}
      delay={2000}
      slidesPerView={1}
      style={{ maxWidth: "100%" }}
    >
      <SwiperSlide>
        <div>
          <img src={slide1} alt="Слайд" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={slide1} alt="Слайд" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={slide1} alt="Слайд" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={slide1} alt="Слайд" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
