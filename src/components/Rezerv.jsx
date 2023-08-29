import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";


const Rezerv = () => {
     const { t } = useTranslation();
     const handleClick = (lang) => {
       i18n.changeLanguage(lang);
       localStorage.setItem("DefaultLang", lang);
     };
   useEffect(() => {

AOS.init();
 });
  return (
    <div>
      <div className="Rezerv-table">
        <img
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/title_border.png"
          alt=""
        />
        <h1> {t("title.9")}</h1>
        <p> {t("title.10")}</p>
        <form action="">
          <label htmlFor="Your Name">
            {t("title.11")} <br />
            <input type="text" placeholder="Ex . Jhon Doe" />
          </label>
          <label htmlFor="No. of Person">
            {t("title.12")} <br />
            <input type="number" placeholder="No. of Person" />
          </label>
          <label htmlFor="Date">
            {t("title.13")} <br />
            <input type="date" />
          </label>
          <label htmlFor="Time">
            {t("title.14")} <br />
            <input type="time" />
          </label>
          <label htmlFor="">
            <button> {t("title.15")}</button>
          </label>
        </form>
      </div>
      <div className="rezerv">
        <div className="text">
          <h1> {t("title.16")}</h1>
          <p className="title"> {t("title.17")}t</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
            ut labore et dolore magna aliqua. Ut en ad minim veniam, quis
            nostrud exercitation ullamco lab aliquip ex ea commodo consequat.
            Penat.
          </p>
          <button> {t("title.18")}</button>
        </div>
        <img
          className="layer3"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/layer3.png"
          alt=""
        />
        <div className="logo">
          <img
            className="logoimg"
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/layer5.svg"
            alt=""
          />
          <img
            className="circle"
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/layer6.svg"
            alt=""
          />
        </div>
        <img
          className="layer4"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/layer4.png"
          alt=""
        />
        <img
          className="chef"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/6.jpg"
          alt=""
        />
        <img
          className="bg"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/bg/bg10.png"
          alt=""
        />
      </div>{" "}
      <div className="hungrybuzz">
        <img
          className="meat"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/bg/bg6.jpg"
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="text"
        >
          <p> {t("title.19")}</p>
          <div className="video">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/play_btn.png"
              alt=""
            />
          </div>
          <p className="cooking"> {t("title.20")}</p>
        </div>
      </div>
    </div>
  );
};

export default Rezerv;
