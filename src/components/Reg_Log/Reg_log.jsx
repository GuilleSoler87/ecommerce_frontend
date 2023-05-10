import React from 'react';
import './Reg_log.css';
import RegistroImg from "../../assets/registro.jpg"
import AccesoImg from "../../assets/acceso.jpg"
import Registro from "./Register/Register"
import Acceso from "./Login/Login"

function Reg_log() {

  return (

    <div className="container">
      <div className="form-container">
        <img src={AccesoImg} alt="Register" />
        <Acceso />
      </div>
      <div className="form-container">
        <img src={RegistroImg} alt="Login" />
        <Registro />
      </div>
    </div>
  );
}

export default Reg_log;
