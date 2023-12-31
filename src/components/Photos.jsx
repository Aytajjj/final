import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";
const Photos = () => {
      const { t } = useTranslation();
      const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("DefaultLang", lang);
      };
  return (
    <div className="photos-main">
      <img
        className="background"
        src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/title_back.png"
        alt=""
      />{" "}
      <h1>{t("title.35")}</h1>
      <div className="photos">
        <div data-aos="fade-down" className=" ph-1 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Coffee Drinks</p>
          </div>
        </div>
        <div data-aos="fade-down" className=" ph-5 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Bake & Bakers</p>
          </div>
        </div>{" "}
        <div data-aos="fade-down" className=" ph-2 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Meat & Mangal</p>
          </div>
        </div>
        <div data-aos="fade-right" className="ph-2 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Izgara & Chilly</p>
          </div>
        </div>
        <div data-aos="fade-up" className="ph-3 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Salatas</p>
          </div>
        </div>
        <div data-aos="fade-left" className="ph-4 photo-card">
          <div className="text">
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
            <p>Becon & Beef</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos