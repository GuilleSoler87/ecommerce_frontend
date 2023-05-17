import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Reg_log from "./components/Reg_Log/Reg_log";
import EditProduct from "./components/Products/EditProduct/EditProduct"
import "./App.css";
import { ProductProvider } from "./context/contextProd/ProductState";
import { UserProvider } from "./context/userContext/UserState";
import { CategoryProvider } from "./context/categoryContext/CategoryState";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrderContext/OrderState";
import SingleProduct from "./components/Products/SingleProduct/SingleProduct";
import { ReviewProvider } from "./context/ReviewContext/ReviewState";



function App() {
  return (

    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <CategoryProvider>
            <OrdersProvider>
              <ReviewProvider>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/updateProduct/:id" element={<EditProduct />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/access" element={<Reg_log />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/getById/:id" element={<SingleProduct />} />
                </Routes>
              </ReviewProvider>
            </OrdersProvider>
          </CategoryProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
