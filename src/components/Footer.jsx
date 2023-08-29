import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";
const Footer = () => {
      const { t } = useTranslation();
      const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("DefaultLang", lang);
      };
  return (
    <div className="footer">
      <div className="left1">
        <h1>{t("title.39")}</h1>
        <p>August 06, 2022</p>
        <span>Bread and Jam</span>
        <p>August 06, 2022</p>
        <span>How to start food Blogging</span>
        <p>August 06, 2022</p>
        <span>15 Amazing Tips to keep food fresh</span>
      </div>
      <div className="middle">
        <img
          width={150}
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/logo2.svg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod tempor
          incididunt
        </p>
      </div>
      <div className="right2">
        <p>{t("title.40")}</p>
        <span>
          Lorem ipsum dolor sit amet consectetur mod tempor indidunt ut labore
          et dolore magna aliqua. Mod tempor indidunt ut labore
        </span>
      </div>
    </div>
  );
}

export default Footer