import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Collapse, Spin } from "antd";
import "./Profile.scss"; // Importa el archivo SCSS
import Footer from "../Footer/Footer";

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
        <h2>Orders</h2>
        <Collapse>
          {user.Orders.map((order) => (
            <Panel header={order.createdAt} key={order.id}>
              {order.Products.map((product) => (
                <p key={product.id}>
                  {product.name} {product.price} €
                </p>
              ))}
            </Panel>
          ))}
        </Collapse>
      <div>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Profile;
