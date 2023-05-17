import React, { useState, useContext } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { UserContext } from '../../../context/userContext/UserState';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const { createUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (values.password !== values.confirmPassword) {
        throw new Error('Las contraseñas no coinciden');
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
        throw new Error('Formato de correo inválido');
      }

      const res = await createUser(values);
      console.log(res)
      if (res) {
        // Show success notification
        notification.success({
          message: 'El registro se ha realizado correctamente.',
          description: 'Te hemos enviado un correo para confirmar el registro'
        });
        // Reset form fields
        form.resetFields();

        // Navigate to the access page
        navigate('/access');
      }


    } catch (error) {
      // Handle registration error
      notification.error({
        message: 'Error',
        description: error.message || 'Hubo un error en el registro. Por favor, inténtalo nuevamente.',
      });
    }
  };

  return (
    <div className="register-container">
      <Form
        form={form}
        labelCol={{
          span: 8,
          className: 'form-item-label',
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={handleSubmit}
        autoComplete="on"
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
          <Input className="ant-input" placeholder="Introduce tu nombre" />
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
          <Input className="ant-input" placeholder="Introduce tu correo electrónico" />
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
          <Input.Password className="ant-input" placeholder="Introduce tu contraseña" />
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
          <Input.Password className="ant-input" placeholder="Confirma tu contraseña" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="ant-btn-primary">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
