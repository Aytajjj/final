import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Rezerv = () => { useEffect(() => {
AOS.init();
 });
  return (
    <div>
    
      <div className="Rezerv-table">
        <img
          src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/title_border.png"
          alt=""
        />
        <h1>About Our Company</h1>
        <p>Book a table in advance to enjoy your time with friends & Family</p>
        <form action="">
          <label htmlFor="Your Name">
            Name: <br />
            <input type="text" placeholder="Ex . Jhon Doe" />
          </label>
          <label htmlFor="No. of Person">
            No. of Person: <br />
            <input type="number" placeholder="No. of Person" />
          </label>
          <label htmlFor="Date">
            Date: <br />
            <input type="date" />
          </label>
          <label htmlFor="Time">
            Time: <br />
            <input type="time" />
          </label>
          <label htmlFor="">
            <button>Reserv our Table</button>
          </label>
        </form>
      </div>
      <div className="rezerv">
        <div className="text">
          <h1>About Us</h1>
          <p className="title">Hungrybuzz cooks food as a culnery Art</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
            ut labore et dolore magna aliqua. Ut en ad minim veniam, quis
            nostrud exercitation ullamco lab aliquip ex ea commodo consequat.
            Penat.
          </p>
          <button>Learn More</button>
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
          <p>Watch Hungrybuzz</p>
          <div className="video">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/play_btn.png"
              alt=""
            />
          </div>
          <p>Cooking Videos</p>
        </div>
      </div>
    </div>
  );
};

export default Rezerv;
