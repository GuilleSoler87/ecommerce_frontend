import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../context/contextProd/ProductState';
import { Image } from 'antd';

const SingleProduct = () => {
  const { id } = useParams();
  const { getProductId, product } = useContext(ProductContext);

  useEffect(() => {
    console.log("hola")
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
      {/* {product.Categories?.map(category=> category.name) } */}
      <ul>
        {product.Categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <p>Reseñas:</p>
      <ul>
        {product.Reviews?.map((review) => (
          <li key={review.id}>{review.tittle} {review.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleProduct;
