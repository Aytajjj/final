import React, { useContext } from "react";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductContext";
import { Container, Row } from "react-bootstrap";

const Market = () => {
  const [market] = useContext(ProductContext);


  return (
    <section className="market">
      <h1 style={{color:"#fff"}} className="title">Popular products</h1>
      <Container>
        <Row>
          {market.slice(0, 9).map((item) => {
            return (
              <SingleCard
                title={item.title}
                key={item.id}
                id={item.id}
                photo={item.photo}
                price={item.price}
                desc={item.desc}
                product={item}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Market;
