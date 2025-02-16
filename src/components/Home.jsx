import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroimg from "../assets/img/hero.jpg";

import bigimg1 from "../assets/img/silder/big1.webp";
import bigimg2 from "../assets/img/silder/big2.webp";
import bigimg3 from "../assets/img/silder/big3.webp";
import bigimg4 from "../assets/img/silder/big4.webp";
import bigimg5 from "../assets/img/silder/big5.webp";
import bigimg6 from "../assets/img/silder/big6.webp";
import bigimg7 from "../assets/img/silder/big7.webp";
import bigimg8 from "../assets/img/silder/big8.webp";
import bigimg9 from "../assets/img/silder/big9.webp";
import bigimg10 from "../assets/img/silder/big10.jpg";
import ScrollButtons from "./ScrollButtons";
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
            <video
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
              src={video}
              autoPlay
              loop
              muted
            />
            <div className="content">
              <h1 className="text-4xl">Welcome</h1>
              <p className="text-xl">To Shelter</p>
            </div>
          </div>
        ) : (
          <div>
            <img src={heroimg} loading="lazy" alt="" />
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
        className="mySwiper pt-5"
      >
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg1}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg2}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg3}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg4}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg5}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg6}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg7}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg8}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg9}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={bigimg10}
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
      <ScrollButtons targetId="story" />{" "}
      {/* Add the ScrollDownButton component */}
      <div div id="story" className="story">
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
          <button
            style={{ backgroundColor: "black", color: "#fbb714" }}
            className="btn btn-secondary mt-4 "
          >
            <a href="tel:+201033030440">Order now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
