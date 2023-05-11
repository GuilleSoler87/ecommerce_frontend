import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, message, notification } from "antd";
import Logo from "../../assets/Logo ECOMMERCE ANIMAZON.png";
import Lupa from "../../assets/lupa.png";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from "@ant-design/icons";


const Header = () => {
  const { token, logout } = useContext(UserContext);
  useEffect(() => {
    if (!token) {
      useNavigate("/");
      notification.success({
        message: "Logout successful",
      });
    }
  }, [token]);
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
          <Link exact="true" to="/" className="header-nav-link">
            Inicio
          </Link>
          <Link to="/about" className="header-nav-link">
            Quienes somos
          </Link>
          <Link to="/products" className="header-nav-link">
            Tienda
          </Link>
          <Link to="/contact" className="header-nav-link">
            Contacto
          </Link>
          {token ? (
            <>
              <Link to="/" className="header-nav-link">
                <Avatar icon={<UserOutlined />} />
              </Link>
              <span onClick={() => logout()}>Logout</span>
            </>
          ) : (
            <Link to="/access" className="header-nav-link">
              Acceso
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;

