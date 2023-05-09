import React from 'react';
import { Link } from 'react-router-dom';
import './Reg_log.css';
import Registro from "../../assets/registro.jpg"
import Acceso from "../../assets/acceso.jpg"

function Reg_log() {

  return (
    <div className="container">
      <div className="form-container">
        <h2>Inicio de sesión</h2>
        <img src={Acceso} alt="Login" />
        <p>Inicia sesión en tu cuenta para acceder a nuestros servicios.</p>
        <Link to="/login"><button>Iniciar sesión</button></Link>
      </div>
      <div className="form-container">
        <h2>Registro</h2>
        <img src={Registro} alt="Register" />
        <p>Crea una cuenta para acceder a nuestros servicios.</p>
        <Link to="/register"><button>Registrarse</button></Link>
      </div>
    </div>
  );
}

export default Reg_log;
