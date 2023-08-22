import { useContext } from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../context/ThemeContext";
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from "react-i18next";
import LoginBtn from "./LoginBtn";

const Header = (product) => {
    const { totalItems } = useCart();
    const { i18n, t } = useTranslation();
const handleClick = (lang) => {
  i18n.changeLanguage(lang);
};
  const [mode, setMode] = useContext(ThemeContext);
  const { totalWishlistItems } = useWishlist();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex  ">
        <div className="container-fluid">
          <button
            className="navbar-toggler  text-light"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="  collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <LinkContainer to="/basket">
                  <Button variant="secondary">
                    <i
                      style={{
                        color: "#d77647",
                      }}
                      className="fa-solid fa-cart-shopping"
                    ></i>
                    <span
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                      }}
                    >
                      {totalItems}
                    </span>
                  </Button>
                </LinkContainer>
                <Link
                  to="/wishlist"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <Button className="btn-wish">
                    {totalWishlistItems / 2}
                    <i class="fa-solid fa-heart ms-1"></i>
                  </Button>
                </Link>

                <Button
                  variant={mode === "light" ? "light" : "warning"}
                  className="ms-3 text-dark"
                  onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light");
                    mode === "light"
                      ? localStorage.setItem("mode", "dark")
                      : localStorage.setItem("mode", "light");
                  }}
                >
                  {mode === "light" ? "🌙" : "☀️"}
                </Button>
              </li>
              <li className="nav-item active">
                <Link className="nav-link " aria-current="page" to="/">
                  {t("title.0")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/menu">
                  Menu
                </Link>
              </li>{" "}
              <li className="nav-item">
                <img
                  width={100}
                  src="https://wpthemebooster.com/demo/themeforest/html/hungrybuzz/assets/images/logo.svg"
                  alt=""
                />
              </li>{" "}
              <li className="login nav-item">
                <Link className="nav-link " to="/login">
                  <Nav.Link className="loginbtnm">
                    <LoginBtn  />
                  </Nav.Link>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <NavDropdown title={t("lang")} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Button
                  onClick={() => {
                    handleClick("az");
                  }}
                >
                  AZ
                </Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button
                  onClick={() => {
                    handleClick("en");
                  }}
                >
                  EN
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
