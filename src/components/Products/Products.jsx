import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../contextProd/ProductState';
import AddProduct from './AddProduct/AddProduct';

const Products = () => {
  const { products, getProducts, deleteProduct } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <AddProduct/>
      {products.map((product) => (
        <div className="product" key={product.id}>
          {/* <img src={product.image} alt={product.name} /> */}
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
