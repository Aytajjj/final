import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../context/ThemeContext";
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from "react-i18next";
import i18n from "../i18next/i18next";

const SingleCard = ({ photo, title, price, product, id }) => {
  const { addWishlistItem } = useWishlist();
    const { t } = useTranslation();
    const handleClick = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("DefaultLang", lang);
    };
 
  const { totalItems } = useCart();
   

  const { addItem } = useCart(); 
   const [mode, setMode] = useContext(ThemeContext);


 
  return (
    <Col sm={6} md={4} style={{ padding: "20px" }}>
      <Card data-aos="zoom-in-up">
        <Card.Img height={300} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}$</Card.Text>
          <Button
            className="cardbtn"
            onClick={() => {
              addItem(product);
              toast.success("Meal added");
              console.log("salam");
            }}
            variant="info"
          >
            {t("title.41")}
          </Button>
          <Button
            className="cardbtn"
            onClick={() => {
              addWishlistItem(product);
              toast.success("Meal added");
            }}
          >
            <i class="fa-solid fa-heart"></i>
          </Button>
          <LinkContainer to={`/product/${id}`}>
            <Button
              className="cardbtn"
              onClick={() => {
                toast.info("Meal details");
              }}
            >
              {t("title.42")}
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
