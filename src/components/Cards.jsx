import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="Cards">
      <div className="left">
        <div data-aos="fade-down-right" className="card">
          <div className="heading">
            <img
              src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/about/icon1.png"
              alt=""
            />
            <h3>Finnest Chef</h3>
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
            <h3>Beautiful Ambiance</h3>
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
            <h3>Sea Food Take Out</h3>
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
            <h3>Famous Clients</h3>
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
        <h1>Our Speciality</h1>
        <span>See our glorious journey as a restaurant</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
          ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud
          exercitation ullamco aliquip ex ea commodo c.
        </p>
        <Link to="/about"> <button >Learn More</button>
        </Link>
       
      </div>
    </div>
  );
}

export default Cards