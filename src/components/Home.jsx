import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import logo from "../assets/img/logo.jpg";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img0 from "../assets/img/0.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="hero">{/* <img src={logo} alt="" /> */}</div>
        <div className="slider mx-auto">
          <Swiper
            style={{
              "": "#fff",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="img-slider">
                <img style={{ width: "100%" }} src={img0} alt="Slide 0" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-slider">
                <img style={{ width: "100%" }} src={img1} alt="Slide 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-slider">
                <img style={{ width: "100%" }} src={img2} alt="Slide 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-slider">
                <img style={{ width: "100%" }} src={img3} alt="Slide 3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
