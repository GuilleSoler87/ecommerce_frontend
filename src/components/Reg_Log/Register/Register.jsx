import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, Input, notification } from 'antd';
import './Register.scss';
import { UserContext } from '../../../context/UserContext/UserState';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    createUser({
      name,
      email,
      password,
      confirmPassword
    });
  };

  useEffect(() => {
    if (successfulRegistration) {
      // Restablecer los valores de los campos a sus valores iniciales
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Mostrar notificación de éxito
      notification.success({
        message: 'Registro exitoso',
        description: 'El registro se ha realizado correctamente.'
      });

      // Reiniciar el estado de successfulRegistration después de 1 segundo
      setTimeout(() => {
        setSuccessfulRegistration(false);
        navigate("/access");
      }, 1000);
    }
  }, [successfulRegistration, navigate]);

  return (
    <div className="register-container">
      <Form
        labelCol={{
          span: 8,
          className: 'form-item-label'
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: 'Por favor introduce tu nombre!',
            },
          ]}
        >
          <Input
            className="ant-input"
            placeholder="Introduce tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor introduce tu email!',
            },
          ]}
        >
          <Input
            className="ant-input"
            placeholder="Introduce tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor introduce tu contraseña!',
            },
          ]}
        >
          <Input.Password
            className="ant-input"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Confirmar"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Por favor confirma tu contraseña!',
            },
          ]}
        >
          <Input.Password
            className="ant-input"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="ant-btn-primary">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;