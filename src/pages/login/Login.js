import React, { useEffect, useState } from "react";
import "../../styles/login.css";
import { Button, Input, Form, Divider } from "antd";
import {
  InfoCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export const Login = ({ auth, setAuth }) => {
  const history = useHistory();
  const [loadSubmit, setLoadSubmit] = useState(false);

  const submit = () => {
    setLoadSubmit(true);
    setTimeout(() => {
      setLoadSubmit(false);
      setAuth(true);
    }, 1000);
  };
  useEffect(() => {
    if (auth) {
      history.push("/inicio");
    }
  }, [auth, history]);

  return (
    <div className="Login">
      <div className="cover"></div>
      <div className="login">
        <div className="form">
          <h1>HOTEL HARRISON</h1>
          <Form layout="vertical">
            <Form.Item label="Usuario:" required>
              <Input
                prefix={<UserOutlined />}
                size="large"
                placeholder="Ingrese su usuario"
              />
            </Form.Item>
            <Form.Item label="Contraseña:" required>
              <Input.Password
                prefix={<LockOutlined />}
                size="large"
                placeholder="Ingrese su contraseña"
              />
            </Form.Item>
            <Form.Item>
              <Button
                loading={loadSubmit}
                onClick={submit}
                type="primary"
                htmlType="submit"
                size="large"
                block
              >
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>
          <Divider>
            <InfoCircleOutlined />
          </Divider>
          <p>
            Sistema <b>Hotelero</b> para la <b>Reserva y Recepción</b> de
            habitaciones de la empresa <b>HARRISON</b>.
          </p>
        </div>
      </div>
    </div>
  );
};
