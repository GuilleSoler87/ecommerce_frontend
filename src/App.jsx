import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Reg_log from "./components/Reg_Log/Reg_log";
import "./App.css";
import { ProductProvider } from "./context/contextProd/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductProvider><Products /></ProductProvider>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/access" element={<Reg_log />} />
        <Route path="/profile" element={<UserProvider><Profile /></UserProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
