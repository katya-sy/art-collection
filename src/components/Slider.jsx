import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../assets/img/slide1.png";

export const Slider = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} style={{ maxWidth: "100%" }}>
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
