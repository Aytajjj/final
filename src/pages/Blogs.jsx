import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import SingleCard from "../components/SingleCard";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Blogs = () => {
  const blogs = useSelector((a) => a);
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            {blogs.map((item, i) => {
              return (
                <Col sm={6} md={4} style={{ padding: "20px" }}>
                  <Card data-aos="zoom-in-up">
                    <Card.Img height={300} variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
