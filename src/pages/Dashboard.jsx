import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { removeBlog } from "../redux/action/Blogaction";
import { ProductContext } from "../context/ProductContext";

const Dashboard = () => {
  const blogs = useSelector((a) => a);
  const dispatch = useDispatch();
const [product] = useContext(ProductContext)
useEffect(()=>{
  console.log(product);
},[])
  return (
    <div>
      <h1 className="text-center my-5">Admin Panel</h1>
      <LinkContainer to="/dashboard/add">
        <Button variant="dark" className="mb-3">
          Add
        </Button>
      </LinkContainer>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Blog photo</th>
            <th>Blog Name</th>
            <th>Blog desc</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, c) => (
            <tr key={item.id}>
              <td>{c + 1}</td>
              <td>
                <img width={100} src={item.photo} alt="" />
              </td>
              <td>{item.title.substring(0, 30)}...</td>
              <td>{item.desc.substring(0, 30)} ...</td>
              <td>
                <td>
                  <LinkContainer to={`/dashboard/edit/${item.id}`}>
                    <Button variant="warning">Edit</Button>
                  </LinkContainer>
                </td>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeBlog({ comingid: item.id }));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>Buy</Button>
    </div>
  );
};

export default Dashboard;
