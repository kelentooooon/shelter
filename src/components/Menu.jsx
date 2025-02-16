import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  EffectCards,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import images
import img1 from "../assets/img/menu/menu1.webp";
import img2 from "../assets/img/menu/menu2.webp";
import img3 from "../assets/img/menu/menu3.webp";
import img4 from "../assets/img/menu/menu4.webp";
import img5 from "../assets/img/menu/menu5.webp";
import img6 from "../assets/img/menu/menu6.webp";
import img7 from "../assets/img/menu/menu7.webp";
import img8 from "../assets/img/menu/menu8.webp";
import img9 from "../assets/img/menu/menu9.webp";
import img0 from "../assets/img/menu/menu10.webp";

const Menu = () => {
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
    <>
      <div className="container mx-auto">
        {isSmallScreen ? (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
            style={{
              overflow: "hidden",
            }}
          >
            <SwiperSlide>
              <img
                src={img1}
                loading="lazy"
                alt="Slide 1"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                loading="lazy"
                alt="Slide 2"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                loading="lazy"
                alt="Slide 3"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                loading="lazy"
                alt="Slide 4"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img5}
                loading="lazy"
                alt="Slide 5"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                loading="lazy"
                alt="Slide 6"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img7}
                loading="lazy"
                alt="Slide 7"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img8}
                loading="lazy"
                alt="Slide 8"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img9}
                loading="lazy"
                alt="Slide 9"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img0}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
            style={{
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <SwiperSlide>
              <img
                src={img1}
                loading="lazy"
                alt="Slide 1"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                loading="lazy"
                alt="Slide 2"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                loading="lazy"
                alt="Slide 3"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                loading="lazy"
                alt="Slide 4"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img5}
                loading="lazy"
                alt="Slide 5"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                loading="lazy"
                alt="Slide 6"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img7}
                loading="lazy"
                alt="Slide 7"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img8}
                loading="lazy"
                alt="Slide 8"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img9}
                loading="lazy"
                alt="Slide 9"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img0}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Menu;
