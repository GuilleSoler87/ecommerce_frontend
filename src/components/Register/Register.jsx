import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    api.post('/users/create', {
      name,
      email,
      password,
      confirmPassword
    })
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        alert('Error al registrar el usuario');
      });
  }

  return (
    <div className="register-container">
      <h2 className="register-title">Registro de usuario</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-input-container">
          <label className="register-label">Nombre:</label>
          <input type="text" className="register-input" value={name} onChange={event => setName(event.target.value)} required placeholder="Introduce tu nombre" />
        </div>
        <div className="register-input-container">
          <label className="register-label">Email:</label>
          <input type="email" className="register-input" value={email} onChange={event => setEmail(event.target.value)} required placeholder="Introduce tu correo electrónico" />
        </div>
        <div className="register-input-container">
          <label className="register-label">Contraseña:</label>
          <input type="password" className="register-input" value={password} onChange={event => setPassword(event.target.value)} required placeholder="Introduce tu contraseña" />
        </div>
        <div className="register-input-container">
          <label className="register-label">Confirmar:</label>
          <input type="password" className="register-input" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} required placeholder="Confirma tu contraseña" />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
