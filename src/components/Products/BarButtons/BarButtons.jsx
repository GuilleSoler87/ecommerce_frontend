import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import "./BarButtons.scss"


const BarButtons = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    
      <div className="product-header">
        <button className="create-product-btn" onClick={() => setShowAddProduct(true)}>Crear producto</button>
        {showAddProduct && <AddProduct />}
      </div>
    
  );
};

export default BarButtons;
