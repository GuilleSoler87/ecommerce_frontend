import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../context/contextProd/ProductState';
import { Image } from 'antd';

const SingleProduct = () => {
  const { id } = useParams();
  const { getProductId, product } = useContext(ProductContext);

  useEffect(() => {
    getProductId(id);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageSrc = product && product.image ? `http://localhost:8080/${product.image}` : '';

  return (
    <div>
      <h2>{product.name}</h2>
      {<Image alt={product.name} src={imageSrc} />}
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      <p>Categorías:</p>
      {/* <ul>
        {product.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <p>Reseñas:</p>
      <ul>
        {product.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      Rest of the product information */}
    </div>
  );
};

export default SingleProduct;
