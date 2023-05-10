import { createContext, useReducer } from "react"
import CategoryReducer from "./categoryReducer"
const API_URL = "http://localhost:8080/"
import axios from "axios"


const initialState = {
    categories: [],

}

export const CategoryContext = createContext(initialState)

export const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState)

    const getCategories = async () => {
        try {
            const res = await axios.get(API_URL + "categories/getAllProdCat");
            dispatch({
                type: "GET_CATEGORIES",
                payload: res.data
            })
        } catch (error) {
            console.error(error)

        }
    }

    return (<CategoryContext.Provider value={{
        categories: state.categories,
        getCategories
    }}>
        {children}
    </CategoryContext.Provider>

    )

}