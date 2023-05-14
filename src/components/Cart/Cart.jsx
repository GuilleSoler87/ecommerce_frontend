import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/contextProd/ProductState";
import { Empty, notification, Card, } from "antd";
import { OrdersContext } from "../../context/OrderContext/OrderState";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Papelera from "../../assets/papelera.png";
import Counter from "../../components/Products/Counter/Counter";
import "./Cart.scss";
import Footer from "../Footer/Footer";

const { Meta } = Card;

const Cart = () => {
  const { cart, clearCart, removeProduct } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  const orderFinish = () => {
    const token = localStorage.getItem("token");

    if (token) {
      createOrder(cart);
      setTimeout(() => {
        clearCart();
      }, 1000);
      notification.success({
        message: "Pedido realizado",
      });
    } else {
      notification.error({
        message: "Es necesario estar logeado",
      });
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    return totalPrice;
  };

  const handleDelete = (productId) => {
    removeProduct(productId);
  };

  const getProductCount = (productId) => {
    const count = cart.filter((product) => product.id === productId).length;
    return count > 1 ? `(${count})` : "";
  };

  return (
    <div className="main_cart_container">
      <div className="cart_container">
        <div className="cart-content">
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <Card
                key={`${product.id}-${index}`}
                style={{ width: 300 }}
                cover={<Image alt={product.name} src={"http://localhost:8080/" + product.image} />}
                actions={[
                  <Counter initialValue={1} incrementBy={1} />,
                  <button className='delete-button' onClick={() => handleDelete(product.id)}><img src={Papelera} alt="borrar" /></button>
                ]}
              >
                <Meta
                  title={<div className="product-name">{product.name} {getProductCount(product.id)}</div>}
                  description={<div className="product-price">{product.price} €</div>}
                />
              </Card>
            ))
          ) : (
            <Empty
              description={
                <span>
                  No hay productos añadidos
                  <ExclamationCircleOutlined className="no-products-icon" />
                </span>
              }
            />
          )}
        </div>
        {cart.length > 0 && (
          <div className="management_cart">
            <button className="clear_cart" onClick={() => clearCart()}>Vaciar cesta</button>
            <Link to="/products"><button className="go_prod_buy"><span>Seguir comprando</span></button></Link>
          </div>
        )}
      </div>
      <div className="card_resume">
        {cart.length > 0 && (
          <Card
            title={<h3 style={{ fontSize: '23px', textAlign: 'left' }}>Resumen</h3>}
            bordered={false}
            style={{
              width: 350,
            }}
          >
            <p className="total_title">Total (Impuestos incluidos):</p>
            {cart.length > 0 ? (
              <>
                <p className="total_price">{calculateTotalPrice()} €</p>
                <button className="button_order" onClick={() => orderFinish()}>Realizar Pedido</button>
              </>
            ) : (
              <Empty
                description={<span>No hay productos en la cesta</span>}
              />
            )}
          </Card>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
