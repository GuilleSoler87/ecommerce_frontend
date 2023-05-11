const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload),
            };
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [action.payload, ...state.products],
            };
        case "GET_PRODUCT_ID":
            return {
                ...state,
                product: action.payload,
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };


        default:
            return state;
    }
};

export default products;

