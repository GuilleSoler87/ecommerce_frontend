import { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer.js"


const initialState = {
    products: [],
};


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:8080/products/getAllProdCat");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    };
    return (
        <GlobalContext.Provider
            value={{
                products: state.products,
                getProducts,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};