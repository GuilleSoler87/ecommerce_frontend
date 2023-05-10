import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../../contextProd/ProductState";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState([]);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const { addProduct } = useContext(ProductContext);

  useEffect(() => {
    axios.get("http://localhost:8080/categories")
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const options = event.target.options;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setCategoryId(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", JSON.stringify(categoryId));
    formData.append("image", image);
    addProduct(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre del producto:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="price">Precio:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="category">Categorías:</label>
      <select
        multiple={true}
        id="category"
        name="category"
        value={categoryId}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="image">Imagen:</label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AddProduct;
