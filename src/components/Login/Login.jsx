import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [token, setToken] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    api.post('/users/login', {
      email: emailValue,
      password: passwordValue
    })
      .then(response => {
        console.log(response.data);
        setToken(response.data.token);
        getUserDetails();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function getUserDetails() {
    api.get('/users/details', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className='login-container'>
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-container">
          <label htmlFor="email" className="login-label">Email:</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={event => setEmailValue(event.target.value)}
            className="login-input"
            required placeholder="Introduce tu email"
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password" className="login-label">Password:</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={event => setPasswordValue(event.target.value)}
            className="login-input"
            required placeholder="Introduce tu contraseña"
          />
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
