import React, { useContext, useEffect} from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { UserContext } from '../../../context/UserContext/UserState';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const { login, message, token } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values)
      .catch((error) => {
        if (error.response) {
          notification.error({
            message: error.response.data.message,
          });
        } else {
          notification.error({
            message: 'Error de conexión',
          });
        }
      });
  };
  
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  
    if (message && token) {
      notification.success({
        message: message,
      });
    }
  
    if (message && !token) {
      notification.error({
        message: message,
      });
    }
  }, [token, message]);
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className='login-container'>
      <Form
        name="basic"
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          <Input className='ant-input' />
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
          <Input.Password className='ant-input' />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Recuérdame</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className='ant-btn-primary'>
            Acceder
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Login;
