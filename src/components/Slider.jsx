import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slide2.png";
import slide3 from "../assets/img/slide3.png";
import { Navigation } from "swiper/modules";
import leftArrow from "../assets/img/left.svg";
import rightArrow from "../assets/img/right.svg";

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Navigation]}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
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
          <img src={slide2} alt="Слайд" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={slide3} alt="Слайд" />
        </div>
      </SwiperSlide>
      <div className="flex-sb" style={{ marginTop: 10 }}>
        <div className="prev" style={{ cursor: "pointer" }}>
          <img src={leftArrow} />
        </div>
        <div className="next" style={{ cursor: "pointer" }}>
          <img src={rightArrow} />
        </div>
      </div>
    </Swiper>
  );
};
