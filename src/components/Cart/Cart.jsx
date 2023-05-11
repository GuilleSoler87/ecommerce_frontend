import { useContext } from "react";
import { ProductContext } from '../../context/contextProd/ProductState';
import { Empty, notification } from "antd";
import { OrdersContext } from "../../context/OrderContext/OrderState";

const Cart = () => {
    const { cart, clearCart } = useContext(ProductContext);
    const { createOrder } = useContext(OrdersContext);
  
    const orderFinish = () => {
      createOrder(cart);
      setTimeout(() => {
        clearCart();
      }, 1000);
      notification.success({
        message: "Pedido realizado",
      });
    };
  
    if (cart.length < 1) {
      return <Empty description={<span>No hay productos añadidos</span>} />;
    }
    return (
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price} €</p>
            </div>
          );
        })}
        <button onClick={() => clearCart()}>Limpiar carrito</button>
        <button onClick={() => orderFinish()}>Hacer pedido</button>
      </div>
    );
  };
  
  export default Cart;