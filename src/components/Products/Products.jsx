import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Products = () => {
  const { products, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          {/* <img src={product.image} alt={product.name} /> */}
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
