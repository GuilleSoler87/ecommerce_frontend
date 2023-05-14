import { createContext, useReducer } from 'react';
import axios from 'axios';
import ProductReducer from './ProductReducer';

const API_URL = 'http://localhost:8080/';

const cart = JSON.parse(localStorage.getItem('cart')) || [];
const initialState = {
  products: [],
  product: {},
  cart: cart,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL + 'products/getAllProdCat');
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await axios.delete(API_URL + 'products/deleteById/' + id, {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: 'DELETE_PRODUCT',
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (product) => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      const res = await axios.post(API_URL + 'products/create', product, {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: 'ADD_PRODUCT',
        payload: res.data.product,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getProductId = async (id) => {
    try {
      const res = await axios.get(API_URL + 'products/getById/' + id);
      dispatch({
        type: 'GET_PRODUCT_ID',
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateProductId = async (id, product) => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await axios.put(API_URL + 'products/updateProdById/' + id, product, {
        headers: {
          authorization: token,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addCart = (product) => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  const removeProduct = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    });
  };


  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,
        getProducts,
        deleteProduct,
        addProduct,
        getProductId,
        updateProductId,
        addCart,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

