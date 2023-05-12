import React, { useContext, useEffect } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, notification, Badge } from "antd";
import Logo from "../../assets/Logo ECOMMERCE ANIMAZON.png";
import Lupa from "../../assets/lupa.png";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductContext } from "../../context/contextProd/ProductState";

const Header = () => {
  const { token, logout, logoutMessage} = useContext(UserContext);
  const { cart } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (logoutMessage) {
      navigate("/");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="header-container">
        <img src={Logo} alt="Logo" className="header-logo" />
        <div className="header-search">
          <input
            type="text"
            placeholder="Buscar"
            className="header-search-input"
          />
          <button className="header-search-button" type="submit">
            <img src={Lupa} alt="Buscar" />
          </button>
        </div>
        <nav className="header-nav">
          <Link exact="true" to="/" className="header-nav-link">Inicio</Link>
          <Link to="/about" className="header-nav-link">Animazon</Link>
          <Link to="/products" className="header-nav-link">Tienda</Link>
          <Link to="/contact" className="header-nav-link">Contacto</Link>
          {token ? (
            <>
              <Link to="/profile" className="header-nav-link"><Avatar icon={<UserOutlined />} /></Link>
              <span onClick={() => { logout(); navigate("/"); }} className="header-nav-link2">Logout</span>
            </>
          ) : (
            <Link to="/access" className="header-nav-link">Mi cuenta</Link>
          )}
          <Link to="/cart" className="header-nav-link"><ShoppingCartOutlined style={{ fontSize: "22px" }}/><Badge count={cart.length} style={{ marginTop: "-22px" }}></Badge></Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

