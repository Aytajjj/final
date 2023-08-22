
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../sass/index.scss";

// import required modules


const Slider = () => {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            <p>Exotic and Delicious</p>
          </div>
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/slider/1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            <p>Made with Love</p>
          </div>
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/slider/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            <p>Savor the Flavor</p>
          </div>
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/slider/3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
