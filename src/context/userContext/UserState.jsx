import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer.js";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
  users: [],
  message: "",
  logoutMessage: ""
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const createUser = async (newUser) => {
    try {
      const res = await axios.post(API_URL + "/users/createUser", newUser);
      dispatch({
        type: "CREATE_USER",
        payload: res.data.user
      });
      console.log(res.data);
      return res.data
      // Aquí puedes realizar alguna acción adicional o mostrar una notificación de éxito
    } catch (error) {
      console.error(error);
      dispatch({
        type: "CREATE_ERROR",
        payload: error.response.data.messages
      });
    }
  };

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/users/login", user);
      // Guardamos el token en el estado
      dispatch({
        type: "LOGIN",
        payload: res.data
      });

      // Guardamos el token en el localStorage
      if (res.data && res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response.data.message
      });
    }
  };

  const getUserInfo = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(API_URL + "/users/getUserOrders", {
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "GET_USER_INFO_ERROR",
        payload: "Error al obtener la información del usuario."
      });
    }
  };

  const logout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout", {
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data
      });
      if (res.data) {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGOUT_ERROR",
        payload: "Error al cerrar sesión."
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        message: state.message,
        logoutMessage: state.logoutMessage,
        createUser,
        login,
        getUserInfo,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
