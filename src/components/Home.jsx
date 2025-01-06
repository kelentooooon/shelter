import React, { useEffect, useRef, useState } from "react";
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

import video from "../assets/video.mp4";

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
        {isSmallScreen ? (
          <div className="overlay">
            <video style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }} src={video} autoPlay loop muted />
            <div className="content">
              <h1 className="text-4xl">Welcome</h1>
              <p className="text-xl">To Shelter</p>
            </div>
          </div>
        ) : (
          <div>
            <img src={heroimg} alt="" />
          </div>
        )}
      </div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
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
      <div className="story">
        <div className="container mx-auto p-4 text-center text-black font-title">
          <h1 className="text-4xl font-bold mb-4">The Story</h1>
          <p className="text-lg">
            In 2019, we opened Shelter House of Cheese, a haven for cheese
            lovers. Our commitment has been to deliver an exceptional experience
            for every guest, whether they're seasoned cheese connoisseurs or
            simply curious about this delicious world.
          </p>
        </div>
      </div>
      <div className="order-now">
        <div className="container mx-auto p-4 text-center text-black font-title">
          <h1 className="text-4xl font-bold mb-4">Order Now</h1>
          <p className="text-lg">
            We offer a wide range of cheese platters, each with a unique
            selection of cheeses. Order for delivery.
          </p>
          <button style={{backgroundColor : "black" , color :"#fbb714"}} className="btn btn-secondary mt-4 "><a href="tel:+201033030440">Order now</a></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
