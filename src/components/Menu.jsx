import React from "react";


const Menu = ({product}) => {
  
  return (
    <div>
      <div className="big-menu">
        <div className="menu-heading">
          <img
            src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/title_border.png"
            alt=""
          />
          <h1>Restaurant Menu</h1>
          <p>Find your favourite meal from the delicious options we have</p>
        </div>
        <div className="icon-menu">
          <div className="icons">
            <div>
              {/* Tabs navs */}
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    <img
                      src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/menu/tabicon_1_2.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    <img
                      src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/menu/tabicon_4_2.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    <img
                      src=" https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/menu/tabicon_5_2.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              {/* Tabs navs */}
              {/* Tabs content */}
              <div
                data-aos="flip-left"
                className="tab-content"
                id="ex1-content"
              >
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="meal">
                    <h1>Main meals</h1>
                    <span>01. Beer-Cheeseburger </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 220 
                    </span>
                  </div>
                  <div className="meal">
                    <span>02. One-Pot Beef with Broccoli </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 180 
                    </span>
                  </div>
                  <div className="meal">
                    <span>03.Pesto Chicken Bake </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 110 
                    </span>
                  </div>
                  <div className="meal">
                    <span>04. Lately deloicous Egs </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 150 
                    </span>
                  </div>
                </div>

                <div
                  data-aos="flip-left"
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div className="meal">
                    <h1>Deserts</h1>
                    <span>01 Perfect Scrambled Eggs </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 150 
                    </span>
                  </div>
                  <div className="meal">
                    <span>02. Banana Nut Pancakes </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 180 
                    </span>
                  </div>
                  <div className="meal">
                    <span>03. Swiss Hash Browns </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 110 
                    </span>
                  </div>
                  <div className="meal">
                    <span>04. Perfect Scrambled Eggs </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 150 
                    </span>
                  </div>
                </div>
                <div
                  data-aos="flip-left"
                  className="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <div className="meal">
                    <h1>Drinks</h1>
                    <span>01. Iced Mocha </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 20 
                    </span>
                  </div>
                  <div className="meal">
                    <span>02. Iced Latte </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 18 
                    </span>
                  </div>
                  <div className="meal">
                    <span>03.Limonatte </span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 10 
                    </span>
                  </div>
                  <div className="meal">
                    <span>04. Charamel Machiatho</span>{" "}
                    <span className="span">
                      Lorem ipsum dolor sit amet consecturer duis
                    </span>
                    <span className="line"></span>
                    <span className="price">
                      $ 50 
                    </span>
                  </div>
                </div>
              </div>
              {/* Tabs content */}
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Menu;
