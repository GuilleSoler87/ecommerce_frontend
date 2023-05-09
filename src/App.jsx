import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Reg_log from "./components/Reg_Log/Reg_log";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={
          <GlobalProvider>
            <Products />
          </GlobalProvider>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/access" element={<Reg_log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
