import axios from "axios";
import React, { useContext } from "react";
import {
  Row,
  Container,
  Col,
  InputGroup,
  Form,
  Card,
  Pagination,
} from "react-bootstrap";

import SingleCard from "../components/SingleCard";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProductContext } from "../context/ProductContext";
import Filter from "./Filter";
import { Select, Space } from "antd";

import { Slider, InputNumber } from "antd";
import Aos from "aos";

import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";

const Shop = (props) => {
 const { t } = useTranslation();
 const handleClick = (lang) => {
   i18n.changeLanguage(lang);
   localStorage.setItem("DefaultLang", lang);
 };
  useEffect(()=>{
    Aos.init()
  })


  const [shop, setShop] = useState([
    {
      id: 1,
      title: "Margarita",
      categori: "Pizza",
      photo:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 30,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: "2",
      title: "Pepperoni",
      categori: "Pizza",
      photo:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 35,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 3,
      title: "Vegeterian",
      categori: "Pizza",
      photo:
        "https://media.istockphoto.com/id/1497887381/photo/family-enjoying-traditional-calabrian-pizza-for-lunch.webp?b=1&s=170667a&w=0&k=20&c=N2x-IiISZcxDYdJImtGb-5PPpaRMHaAAI4t-9ppJlm0=",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 6,
      title: "summer salad",
      categori: "salad",
      photo:
        "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 70,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 4,
      title: "RED salad",
      categori: "salad",
      photo:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 90,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 5,
      title: "Vegeterian",
      categori: "salad",
      photo:
        "https://plus.unsplash.com/premium_photo-1671403964050-f7756da6c60b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: 27,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 7,
      title: "Steak and patato",
      categori: "meal",
      photo:
        "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: 125,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 8,
      title: "Red Valved",
      categori: "meal",
      photo:
        "https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: 220,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 9,
      title: "Makaronne",
      categori: "pasta",
      photo:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
    },
    {
      id: 10,
      title: "Fettichune Alfredo",
      categori: "pasta",
      photo:
        "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!",
      price: 300,
    },
  ]);

  const [query, setQuery] = useState("");

  const [data, setData] = useState(shop);

  

  const [min, SetMin] = useState(10);
  const [max, SetMax] = useState(400);

 
  console.log("shopp line 60: ", shop);

  const filteredFunctions = (value) => {
    if (value[0] < value[1]) {
      SetMin(value[0]);
      SetMax(value[1]);
    }
    if (max > value) {
      SetMin(value);
    }
    if (min < value) {
      SetMax(value);
    }

    let filteredData = shop?.filter(
      (item) => item.price >= min && item.price <= max
    );
    setData(filteredData);
  };

  return (
    <div className="shop-page">
      <Header />
      <Container className="con-shop">
        <div className="products-text px-4 py-5  text-center ">
          <h1 className="shop-head">{t("title.43")}</h1>
        </div>

        <Slider
          style={{ width: "200px" }}
          range
          defaultValue={[min, max]}
          value={[min, max]}
          min={0}
          max={400}
          onChange={filteredFunctions}
        />
        <div className="range-input-number-main">
          <InputNumber
            className="min-input-main"
            min={0}
            max={400}
            value={min}
            onChange={filteredFunctions}
          />
          <span className="range-span"> to </span>
          <InputNumber
            className="min-input-main"
            min={0}
            max={400}
            value={max}
            onChange={filteredFunctions}
          />
        </div>

        <div className="filter-wrapper ">
          <InputGroup className="input-search mb-3 my-5">
            <Form.Control
              className="input-search"
              placeholder="Search product"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <Button className="btn-search" variant="success">
              Search
            </Button>
          </InputGroup>
        </div>

        <div className="d-flex">
          <Row className="cards-row g-4 m-0 ">
            <>
              {data
                .filter((item) =>
                  item.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, i) => {
                  return (
                    <SingleCard
                      id={item.id}
                      photo={item.photo}
                      title={item.title}
                      price={item.price}
                      key={item}
                      product={item}
                    />
                  );
                })}

              {/* <Pagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={shop.length}
                  onPageChange={handlePageChange}
                /> */}
            </>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Shop;
