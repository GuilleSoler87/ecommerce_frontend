import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserState";
import { Card, Collapse, Spin } from "antd";
import "./Profile.scss"; // Importa el archivo SCSS
import Footer from "../Footer/Footer";
import { AreaChartOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div className="main_profile">
      <div>
        <Card
          title="Perfil"
          extra={<a href="#">{user.role}</a>}
          style={{
            width: 500,
          }}
        >
          <img
            style={{
              width: 120,
            }}
            src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360"
            alt=""
          />
          <p>
            <b>Nombre:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </Card>
        <h2>Historial de pedidos</h2>
        <Collapse>
          {user.Orders.map((order) => (
            <Panel header={order.createdAt} key={order.id}>
              <div className="text_container">
                <b style={{ fontSize: "1.3em" }}>Productos:{" "}</b>
                {order.Products.map((product) => (
                  <p key={product.id}>
                    {product.name} <b>{product.price} €</b>
                  </p>
                ))}
                <p><AreaChartOutlined style={{ fontSize: "1.8em" }} />
                  <b style={{ fontSize: "1.1em" }}>Total del Pedido:{" "}</b>
                  <b style={{ fontSize: "1.4em" }}>
                    {order.Products.reduce(
                      (total, product) => total + product.price,
                      0
                    )}{" "}
                    €
                  </b>
                </p>
                </div>
              </Panel>
          ))}
        </Collapse>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
