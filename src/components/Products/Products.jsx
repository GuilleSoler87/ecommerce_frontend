import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/contextProd/ProductState';
import "./Products.scss"
import { Link, useNavigate } from "react-router-dom";
import BarButtons from './BarButtons/Barbuttons';
import { Card, Avatar } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext/UserState';
const { Meta } = Card;
import Carrito from "../../assets/carrito.png"
import Papelera from "../../assets/papelera.png"


const Products = () => {
  const { products, getProducts, deleteProduct, addCart } = useContext(ProductContext);
  const { user, getUserInfo } = useContext(UserContext);


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container_prodsPrin">
      {user && user.role === 'admin' && <BarButtons />}
      <div className="products_container">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              style={{ width: 400 }}
              cover={<img alt={product.name} src={"http://localhost:8080/" + product.image} />}
              actions={[
                <button className="button_chars_prod"><Link to={'/' + product.id}><span>Ver detalle</span></Link></button>,
                <button className='button_cart' onClick ={() => addCart(product)}><img src={Carrito} alt="carrito"/></button>,
              ]}
            >
              <Meta
                title={product.name}
                description={product.price} 
              />
            </Card>
            <div className='div_butt_prod_adm'>
            {user && user.role === 'admin' && <button><Link to={'/updateProduct/' + product.id}><EditOutlined key="edit" /></Link></button>}
            {user && user.role === 'admin' && <button className= "delete_butt" onClick={() => deleteProduct(product.id)}><img src={Papelera} alt="borrar"/></button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

