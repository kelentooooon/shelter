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
import img1 from "../assets/img/menu/menu1.jpg";
import img2 from "../assets/img/menu/menu2.jpg";
import img3 from "../assets/img/menu/menu3.jpg";
import img4 from "../assets/img/menu/menu4.jpg";
import img5 from "../assets/img/menu/menu5.jpg";
import img6 from "../assets/img/menu/menu6.jpg";
import img7 from "../assets/img/menu/menu7.jpg";
import img8 from "../assets/img/menu/menu8.jpg";
import img9 from "../assets/img/menu/menu9.jpg";
import img0 from "../assets/img/menu/menu10.jpg";

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
              <img src={img1} alt="Slide 1" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Slide 2" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Slide 3" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Slide 4" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Slide 5" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Slide 6" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="Slide 7" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Slide 8" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="Slide 9" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img0} alt="Slide 0" className="swiper-img" />
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
              <img src={img1} alt="Slide 1" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Slide 2" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Slide 3" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Slide 4" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Slide 5" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Slide 6" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="Slide 7" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Slide 8" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="Slide 9" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img0} alt="Slide 0" className="swiper-img" />
            </SwiperSlide>
          </Swiper>
        )}

      </div>
    </>
  );
};

export default Menu;
