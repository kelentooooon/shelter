import React, {useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroimg from "../assets/img/hero.jpg";

import bigimg1 from "../assets/img/big-silder/big1.jpg";
import bigimg2 from "../assets/img/big-silder/big2.jpg";
import bigimg3 from "../assets/img/big-silder/big3.jpg";
import bigimg4 from "../assets/img/big-silder/big4.jpg";
import bigimg5 from "../assets/img/big-silder/big5.jpg";
import bigimg6 from "../assets/img/big-silder/big6.jpg";
import bigimg7 from "../assets/img/big-silder/big7.jpg";
import bigimg8 from "../assets/img/big-silder/big8.jpg";
import bigimg9 from "../assets/img/big-silder/big9.jpg";
import bigimg10 from "../assets/img/big-silder/big10.jpg";

import smallimg1 from "../assets/img/mobile-silder/small1.jpg";
import smallimg2 from "../assets/img/mobile-silder/small2.jpg";
import smallimg3 from "../assets/img/mobile-silder/small3.jpg";
import smallimg4 from "../assets/img/mobile-silder/small4.jpg";
import smallimg5 from "../assets/img/mobile-silder/small5.jpg";
import smallimg6 from "../assets/img/mobile-silder/small6.jpg";
import smallimg7 from "../assets/img/mobile-silder/small7.jpg";
import smallimg8 from "../assets/img/mobile-silder/small8.jpg";
import smallimg9 from "../assets/img/mobile-silder/small9.jpg";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="hero">
        <img src={heroimg} alt="" />
      </div>
      {isSmallScreen ? (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper py-2"
        >
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg6}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg7}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg8}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={smallimg9}
            />
          </SwiperSlide>

        </Swiper>
      ) : (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper py-5"
        >
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg6}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg7}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg8}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg9}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={bigimg10}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Home;
