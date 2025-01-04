import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import images
import img1 from "../assets/img/menu/img1.jpg";
import img2 from "../assets/img/menu/img2.jpg";
import img3 from "../assets/img/menu/img3.jpg";
import img4 from "../assets/img/menu/img4.jpg";
import img5 from "../assets/img/menu/img5.jpg";
import img6 from "../assets/img/menu/img6.jpg";
import img7 from "../assets/img/menu/img7.jpg";
import img8 from "../assets/img/menu/img8.jpg";
import img9 from "../assets/img/menu/img9.jpg";
import img0 from "../assets/img/menu/img0.jpg";

const Menu = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img0} alt="Slide 0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Slide 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="Slide 9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Menu;
