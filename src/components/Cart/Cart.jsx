import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/contextProd/ProductState";
import { Empty, notification, Card } from "antd";
import { OrdersContext } from "../../context/OrderContext/OrderState";
import Papelera from "../../assets/papelera.png";
import "./Cart.scss";
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

  if (cart.length < 1) {
    return <Empty description={<span>No hay productos añadidos</span>} />;
  }

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
          {cart.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              style={{ width: 300 }}
              cover={<img alt={product.name} src={"http://localhost:8080/" + product.image} />}
              actions={[
                <button className='delete-button' onClick={() => handleDelete(product.id)}><img src={Papelera} alt="borrar" /></button>
              ]}
            >
              <Meta
                title={<div className="product-name">{product.name} {getProductCount(product.id)}</div>}
                description={<div className="product-price">{product.price} €</div>}
              />
            </Card>
          ))}
        </div>
        <div className="management_cart">
          <button className="clear_cart" onClick={() => clearCart()}>Vaciar cesta</button>
          <Link to="/products"><button className="go_prod_buy"><span>Seguir comprando</span></button></Link>
        </div>
      </div>
      <div className="card_resume">
        {cart.length > 0 && (
          <Card
            title={<h3 style={{ fontSize: '20px', textAlign: 'left' }}>Resumen</h3>}
            bordered={false}
            style={{
              width: 350,
            }}
          >
            <p className="total_title">Total (Impuestos incluidos):</p>
            <p className="total_price">800€</p>
            <button className="button_order" onClick={() => orderFinish()}>Realizar Pedido</button>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Cart;

