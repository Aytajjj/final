
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../sass/index.scss";
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";


// import required modules


const Slider = () => {
   const { t } = useTranslation();
   const handleClick = (lang) => {
     i18n.changeLanguage(lang);
     localStorage.setItem("DefaultLang", lang);
   };
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
            <p> {t("title.6")}</p>
          </div>
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/slider/1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            <p> {t("title.7")}</p>
          </div>
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/slider/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            <p> {t("title.8")}</p>
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
