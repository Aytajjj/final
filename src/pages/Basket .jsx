import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { useState } from "react";
import  Modal  from "react-bootstrap/Modal";

const Basket = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();


const navigate =useNavigate();
const [show, setShow] = useState(false);

const handleShow =() =>{
  if(localStorage.getItem("user") !==null){
    setShow(true);
  } else{
    navigate("/login")
  }
  }


  const handleClose = () =>{
    localStorage.removeItem("react-use-cart");
    window.location.reload();
    setShow(false);
  }

  return (
    <>
      {isEmpty ? (
        <LinkContainer to="/">
          <div className="d-flex justify-content-center">
            <img
              width={600}
              src="https://img.pikbest.com/png-images/20191028/push-shopping-cart-to-woman-gif_2515298.png!bw700"
              alt=""
            />
            <Button style={{ height: 50 }}>Back</Button>
          </div>
        </LinkContainer>
      ) : (
        <>
          <Container>
            <h1 className="my-5 text-center ">Your Basket</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((value) => (
                  <tr>
                    <td>1</td>
                    <td>
                      <img width={100} src={value.photo} alt="" />
                    </td>
                    <LinkContainer to={`/products/${value.id}`}>
                      <td className="text-primary">
                        {value.title.substring(0, 30)}...
                      </td>
                    </LinkContainer>
                    <td>{value.price * value.quantity}$</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => {
                          updateItemQuantity(value.id, value.quantity - 1);
                          toast.error("Product removed");
                        }}
                      >
                        -
                      </Button>
                      <span className="mx-2">{value.quantity}</span>
                      <Button
                        variant="success"
                        onClick={() => {
                          updateItemQuantity(value.id, value.quantity + 1);
                          toast.success("Product added");
                        }}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeItem(value.id);
                          toast.error("Product removed");
                        }}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4 className="mt-3 ">Total Price:{cartTotal}$</h4>
          </Container>
          <LinkContainer to="/">
            <Button>Back</Button>
          </LinkContainer>
          {/* <LinkContainer to="/login"> */}
            <Button className="buy" onClick={handleShow}>Buy</Button>
          {/* </LinkContainer> */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>Shopping successfully completed!</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                <i className="fa-solid fa-check"></i>
              </Button>
            </Modal.Footer>
          </Modal>
          
        </>
      )}
    </>
  );
                      }  

export default Basket;
