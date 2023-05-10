import { createContext, useReducer } from 'react';
import axios from 'axios'
import ProductReducer from "./ProductReducer"
const API_URL = "http://localhost:8080/"


const initialState = {
    products: [],
    product:{}
};


export const ProductContext = createContext(initialState);


export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get(API_URL + "products/getAllProdCat");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    };
    const deleteProduct = async (id) => {
        const res = await axios.delete(API_URL + "products/deleteById/" + id) //PREGUNTAR
        dispatch({
            type: "DELETE_PRODUCT",
            payload: id
        });

    };
    const addProduct = async (product) => {
        const res = await axios.post(API_URL + "products/create", product)
        dispatch({
            type: "ADD_PRODUCT",
            payload: res.data.product,
        });

    }

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                getProducts,
                deleteProduct,
                addProduct
            }}>
            {children}
        </ProductContext.Provider>
    );
};