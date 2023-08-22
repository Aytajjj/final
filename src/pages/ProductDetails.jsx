import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { LinkContainer } from "react-router-bootstrap";

const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { id } = useParams();
  // console.log(id, product);

  const productdetails = product.find((p) => p.id.toString() === id);
  console.log(productdetails);
  const { addItem } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {productdetails === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={productdetails.photo}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                {productdetails.title}
              </h1>
              <p>{productdetails.desc}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  onClick={() => {
                    addItem(productdetails);
                    toast.success("Product added");
                    console.log("salam");
                  }}
                  variant="info "
                >
                  Add to cart
                </Button>
                <LinkContainer to="/">
                  <Button>Back</Button>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
