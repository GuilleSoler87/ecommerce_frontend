const users = (state, action) => {
  switch (action.type) {
    
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        user: action.payload.user
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
        message: "",
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        message: "",

      };
    case "LOGIN_ERROR":
      return {
        ...state,
        message: action.payload
      };
    case "CREATE_ERROR":
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
export default users;