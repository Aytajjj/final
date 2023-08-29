import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";
const Cards = () => {
      const { t } = useTranslation();
      const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("DefaultLang", lang);
      };
  return (
    <div className="Cards">
      <div className="left">
        <div data-aos="fade-down-right" className="card">
          <div className="heading">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/icon1.png"
              alt=""
            />
            <h3>{t("title.28")}</h3>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing tempor
              incididunt ut labore et dolore magna aliqua. Ut ad minim veniam,
              quis nostrud exercitation ullamco aliquip ex ea commodo c.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="card">
          <div className="heading">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/icon2.png"
              alt=""
            />
            <h3>{t("title.29")}</h3>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing tempor
              incididunt ut labore et dolore magna aliqua. Ut ad minim veniam,
              quis nostrud exercitation ullamco aliquip ex ea commodo c.
            </p>
          </div>
        </div>{" "}
        <div data-aos="fade-right" className="card">
          <div className="heading">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/icon3.png"
              alt=""
            />
            <h3>{t("title.30")}</h3>
          </div>
          <div className="text">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing tempor
              incididunt ut labore et dolore magna aliqua. Ut ad minim veniam,
              quis nostrud exercitation ullamco aliquip ex ea commodo c.
            </p>
          </div>
        </div>{" "}
        <div data-aos="fade-up-left" className="card">
          <div className="heading">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/icon4.png"
              alt=""
            />
            <h3>{t("title.31")}</h3>
          </div>
          <div className="text">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing tempor
              incididunt ut labore et dolore magna aliqua. Ut ad minim veniam,
              quis nostrud exercitation ullamco aliquip ex ea commodo c.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>{t("title.32")}</h1>
        <span>{t("title.33")}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
          ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud
          exercitation ullamco aliquip ex ea commodo c.
        </p>
        <Link to="/about">
          {" "}
          <button>{t("title.34")}</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards