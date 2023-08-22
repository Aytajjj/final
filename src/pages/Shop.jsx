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


const Shop = (props) => {
  const [allData, setAllData] = useState([]);
  const [shop, setShop] = useState([]);
  const [query, setQuery] = useState("");
  // this is for pagination
  const [market] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(market.products);
  const filterCategory = (catItem) => {
    const result = market.products?.filter((item) => {
      return item.category === catItem;
    });
    setData(result);
  };

  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    const value = e.target.value;
    const result = market.products?.filter((item) => {
      return item.price < value;
    });
    setData(result);
    const resultAz = market.productsAz?.filter((item) => {
      return item.price < value;
    });

    setValue(value);
  };

  const clearFilters = () => {
    setData(market.products);
  };

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:5500/src/data/Api.json").then((res) => {
        setShop(res.data);
        setAllData(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }, []);

  // this is for filtering

  const filterResult = (catItem) => {
    // console.log("filter catItem: ", catItem, shop);
    setQuery("");
    setCurrentPage(1);
    if (catItem !== "") {
      const result = allData.filter((item) => {
        return item.category === catItem;
      });
      // console.log('result: ', result);
      setShop(result);
    } else {
      setShop(allData);
    }
  };

  const handleSearchFilter = (e) => {
    setQuery(e.target.value);
    setCurrentPage(1);
    const searchableShop = allData.filter((item) =>
      item.title.toLocaleLowerCase().includes(e.target.value)
    );
    setShop(searchableShop);
  };

  // Sehifeler arasında kecid etmek ucun islenen funksiya
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Movcud sehife nomresine gore productlari almaq uçun hesablama
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (loading) return null;

  console.log("shopp line 60: ", shop);

  return (
    <div className="shop-page">
      <Header />
      <Container className="con-shop">
        <div className="products-text px-4 py-5  text-center ">
          <h1>All Products</h1>
        </div>
        <div className="filter-wrapper ">
          <InputGroup className="input-search mb-3 my-5">
            <Form.Control
              className="input-search"
              placeholder="Search product"
              onChange={handleSearchFilter}
              value={query}
            />
            <Button className="btn-search" variant="success">
              Search
            </Button>
          </InputGroup>
        </div>

        <div className="d-flex">
          <Row className="cards-row g-4 m-0 ">
            {shop.length > 0 ? (
              <>
                {shop
                  .slice(indexOfFirstPost, indexOfLastPost)
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

                <Pagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={shop.length}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <p>No any item</p>
            )}
          </Row>
        
        </div>
       

        
      <Filter />
      </Container>
      
      <Footer />
    </div>
  );
};

export default Shop;
