import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const createOrder = async () => {

    const token = JSON.parse(localStorage.getItem("token"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    
    //BUCLE PARA SACAR LOS ID
    const productIds = cart.map(product => product.id);
    console.log(productIds)

    //BUCLE PARA SACAR LOS ID
    try {
      await axios.post(
        API_URL + "/orders/createOrder",
        { productIds },  
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};