import React from "react";

import "./sass/index.scss";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Menupage from "./pages/Menupage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { CartProvider } from "react-use-cart";
import Basket from "./pages/Basket ";
import Wishlist from "./pages/Wishlist";
import { useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { WishlistProvider } from "react-use-wishlist";
import Auth from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditBlog from "./pages/update/EditBlog";
import CreateBlog from "./pages/update/CreateBlog";
import { useSelector } from "react-redux";
import Blogs from "./pages/Blogs";

const App = () => {
  const [mode] = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector("body").className = mode;
  });

  const blogs = useSelector((a) => a);

  useEffect(()=>{
    localStorage.setItem('Blogs', JSON.stringify(blogs))
  })

  return (
    <div className="app">
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <CartProvider>
          {" "}
          <WishlistProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/menu" element={<Menupage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/product/:id" element={<ProductDetails />}></Route>
              <Route path="/basket" element={<Basket />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/admin" element={<Auth />}></Route>
              <Route
                path="/dashboard/add"
                element={<CreateBlog />}
              ></Route>
              <Route
                path="/dashboard/edit/:id"
                element={<EditBlog />}
              ></Route>
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
