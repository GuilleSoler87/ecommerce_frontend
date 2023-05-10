import { createContext, useReducer } from 'react';
import axios from 'axios'
import ProductReducer from "./ProductReducer.js"


const initialState = {
    products: [],
    product:{}
};


export const ProductContext = createContext(initialState);


export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:8080/products/getAllProdCat");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    };
    const deleteProduct = async (id) => {
        const res = await axios.delete('http://localhost:8080/products/deleteById/' + id) //PREGUNTAR
        dispatch({
            type: "DELETE_PRODUCT",
            payload: id
        });

    };
    const addProduct = async (product) => {
        const res = await axios.post('http://localhost:8080/products/create', product)
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