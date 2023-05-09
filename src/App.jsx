import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Reg_log from "./components/Reg_Log/Reg_log";
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import "./App.css";


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/access" element={<Reg_log />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
