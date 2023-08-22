import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

const Wishlist = () => {
  const { addItem } = useCart();

  const { isEmptyWishlist, items, emptyWishlist, removeWishlistItem } =
    useWishlist();

    const myArray = [
      ...new Map(items.map((item) => [item.id, item])).values(),
    ];

  return (
    <div className="cart-page">
      <Container className="con-cart">
        <h1>Wishlist</h1>
        <Table bordered className="cart-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Add to Cart</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myArray.map((fd, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <img src={fd.photo} alt="err" width={50} />
                </td>
                <td>{fd.title}</td>
                <td>{fd.price}$</td>

                <td>
                  <Button
                    className="btn-cart"
                    onClick={() => {
                      addItem(fd);
                        toast.success("Product added");
                    }}
                  >
                    Add to cart
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn-cart1"
                    onClick={() => removeWishlistItem(fd.id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          className="btn-cart-alldata"
          onClick={() => {
            emptyWishlist("");
          }}
        >
          Delete All
        </Button>
      </Container>
    </div>
  );
};

export default Wishlist;
