import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";
const Takeout = () => {
      const { t } = useTranslation();
      const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("DefaultLang", lang);
      };
  return (
    <div className="Takeout">
      <div className="text">
        <h1>{t("title.37")}</h1>
        <p>We are open for anu order Online</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor
          incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam.
        </span>
        <div className="icons">
          <p>{t("title.38")} </p>
          <span> +0888 . 1234 . 5699</span>
        </div>
      </div>
      <div className="img">
        <img
          className="takeimg"
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/bg/banner_bg1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Takeout