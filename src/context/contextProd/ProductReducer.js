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
        case "REMOVE_FROM_CART":
            const productId = action.payload;
            const updatedCart = state.cart.filter((product) => product.id !== productId);
            return {
                ...state,
                cart: updatedCart,
            };
        case 'GET_PRODUCT_BY_NAME':
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
    }
};

export default products;

