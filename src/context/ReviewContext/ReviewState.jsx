import { createContext, useReducer } from "react"
import ReviewReducer from "./ReviewReducer"
const API_URL = "http://localhost:8080/"
import axios from "axios"


const initialState = {
    reviews: [],

}

export const ReviewContext = createContext(initialState)

export const ReviewProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReviewReducer, initialState)

    const getReviews = async () => {
        try {
            const res = await axios.get(API_URL + "reviews/getAllRevUs");
            dispatch({
                type: "GET_REVIEWS",
                payload: res.data
            })
        } catch (error) {
            console.error(error)

        }
    }

    return (<ReviewContext.Provider value={{
        reviews: state.reviews,
        getReviews
    }}>
        {children}
    </ReviewContext.Provider>

    )

}