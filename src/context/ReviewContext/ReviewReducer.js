const reviewReducer = (state, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "CREATE_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};

export default reviewReducer;