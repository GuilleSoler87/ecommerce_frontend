import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/contextProd/ProductState";
import { CategoryContext } from "../../../context/categoryContext/CategoryState";
import { Select, Space } from 'antd';
import { notification } from "antd";
import "./EditProduct.scss";
import Footer from "../../Footer/Footer";

const EditProduct = () => {
  const { product, getProductId, updateProductId } = useContext(ProductContext);
  const { categories, getCategories } = useContext(CategoryContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState([]);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductId(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setCategoryId(product.categoryId);
    }
  }, [product]);

  useEffect(() => {
    if (message) {
      notification.success({
        message: "Producto actualizado con éxito",
      });
    }
  }, [message]);

  const options = categories.map(category => {
    return { value: category.id, label: category.name }
  })
  const handleChange = (value) => {
    setCategoryId(value)
    console.log(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    if (Array.isArray(categoryId)) { // Verificar si categoryId es un array
      for (let i = 0; i < categoryId.length; i++) {
        formData.append('CategoryId', categoryId[i]);
      }
    }
    formData.append("image", image);

    updateProductId(id, formData)
      .then((res) => {
        setMessage("Producto actualizado exitosamente!");
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <h2>Editar producto</h2>
      <form className="form-container_edt" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre de Producto:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            className="form-input"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
            name="price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            className="form-input"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
            name="description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">Categoría:</label>
          <Space
            style={{
              width: '100%',
            }}
            direction="vertical"
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '100%',
                position: "relative",
                zIndex: 1
              }}
              placeholder="Please select"
              defaultValue= {""}    //{product.categories.map(category => category.name) || ""}
              onChange={handleChange}
              options={options}
            />
          </Space>
        </div>
        <div className="form-group2">
          <label htmlFor="imageProduct">Imagen:</label>
          <input
            type="file"
            id="imageProduct"
            className="form-file"
            name="imageProduct"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="form-button">Editar</button>
        <h1 className="form-message">{message}</h1>
      </form>
      <Footer/>
    </div>
  );
};

export default EditProduct;
