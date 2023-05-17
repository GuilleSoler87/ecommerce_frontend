import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../context/contextProd/ProductState';
import { Image, Collapse, Avatar, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useNavigate} from 'react-router-dom';
import { ReviewContext } from '../../../context/ReviewContext/ReviewState';
import { UserContext } from '../../../context/userContext/UserState';
import './SingleProduct.scss';
import Carrito from '../../../assets/carrito.png';
import Footer from '../../Footer/Footer';
const { Panel } = Collapse;

const SingleProduct = () => {
  const { id } = useParams();
  const { getProductId, product, addCart } = useContext(ProductContext);
  const { createReview } = useContext(ReviewContext);
  const { user, token } = useContext(UserContext);
  const [tittle, setTittle] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getProductId(id);
  }, [id]);



  const handleAddReview = (e) => {
    e.preventDefault();
    if (!token || !user) {
      notification.error({
        message: 'Inicia sesión para añadir una reseña.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('comment', comment);
    formData.append('UserId', user.id); //creo que es aquí el fallo
    formData.append('ProductId', id);

    createReview(formData)
    console.log(formData)
      .then(() => {
        setTittle('');
        setComment('');
        notification.success({
          message: 'Reseña creada con éxito.',
        });
        navigate('/products');
      })
      .catch((error) => {
        console.error(error);
        notification.error({
          message: 'Error al crear la reseña.',
        });
      });
  };

  const imageSrc = product && product.image ? `http://localhost:8080/${product.image}` : '';

  return (
    <div className='major_content'>
      <div className='sticky_container'>
        <div className='supreme_content'>
          <div className='main_container'>
            <div className='product_container_info'>
              <div className='img_product_info'>
                {<Image alt={product.name} src={imageSrc} />}
              </div>
              <div className='text_product_info'>
                <h2 className='title_product_sing'>{product.name}</h2>
                <p style={{ textAlign: 'right', fontSize: '1.8em' }}><b>{product.price}€</b></p>
                <p><b>Descripción:</b></p>
                <p>{product.description}</p>
                <div className='categories_info'>
                  <p className='p_categories'><b>Categorías:</b></p>
                  <ul className='ul_categories'>
                    {product.Categories?.map((category) => (
                      <li className='li_categories' key={category.id}>{category.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='buttons_product'>
              <button className='button_cart' onClick={() => addCart(product)}>
                <span>Añadir al carrito</span>
                <img src={Carrito} alt='carrito' />
              </button>
              <Link to='/products'>
                <button className='go_prod_buy2'><span>Volver atrás</span></button>
              </Link>
            </div>
          </div>
        </div>
        <div className='button_reviews_cont'>
          <form className='review-form'>
            <div className='form-group'>
              <label htmlFor='title'>Título:</label>
              <input
                className='form-group_input'
                type='text'
                id='title'
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='comment'>Comentario:</label>
              <input
                className='form-group_input2'
                type='text'
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button className='button_review' onClick={handleAddReview}>Añadir reseña</button>
          </form>
        </div>
        <div className='info_reviews'>
          <p className='res_review'><b>Reseñas:</b></p>
          {product.Reviews && product.Reviews.length > 0 ? (
            <Collapse>
              {product.Reviews.map((review) => (
                <Panel header={<b>{review.tittle}</b>} key={review.id}>
                  <p>{review.comment}</p>
                  <p>
                    Escrito por: <b>{review.User.name}</b>{' '}
                    <Avatar
                      style={{
                        backgroundColor: '#eb7c36',
                      }}
                      icon={<UserOutlined />}
                    />
                  </p>
                </Panel>
              ))}
            </Collapse>
          ) : (
            <p>Este producto no tiene reseñas</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
