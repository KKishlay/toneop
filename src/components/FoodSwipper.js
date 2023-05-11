import React from "react";
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const FoodSwipper = () => {
  return (
    <div className="h-auto pt-36">
      <h1 className="text-center text-4xl font-medium pb-10">
        Our <span className="text-green-900">Menu</span>
      </h1>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 1500 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img src="food2.jpeg" alt="img1" />
            <p className="px-24 py-4 font-medium">Kcal-256</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="food3.jpeg" alt="img1" />
            <p className="px-24 py-4 font-medium">Kcal-296</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="food4.jpeg" alt="img1" />
            <p className="px-24 py-4 font-medium">Kcal-175</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="food5.jpeg" alt="img1" />
            <p className="px-24 py-4 font-medium">Kcal-298</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="food8.jpeg" alt="img1" />
            <p className="px-24 py-4 font-medium">Kcal-300</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwipper;
