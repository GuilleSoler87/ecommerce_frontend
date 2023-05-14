import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/contextProd/ProductState";
import { CategoryContext } from "../../../context/categoryContext/CategoryState";
import Select from "react-select";
import { notification } from "antd";
import "./EditProduct.scss";

const EditProduct = () => {
  const { product, getProductId, updateProductId } = useContext(ProductContext);
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

  const options = [
    { value: 1, label: "Funkos" },
    { value: 2, label: "One Piece" },
    { value: 3, label: "Merchandising" },
    { value: 4, label: "Replica Weapons" },
    { value: 5, label: "Resin" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categoryId", JSON.stringify(categoryId));
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

  const handleChange = (selectedOptions) => {
    setCategoryId(selectedOptions.map((option) => option.value));
  };

  return (
    <div>
      <h2>Editar producto</h2>
      <form className="form-container" onSubmit={handleSubmit}>
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
          <Select
            id="categoryId"
            className="form-select"
            isMulti
            name="categoryId"
            options={options}
            value={options.filter((option) =>
              Array.isArray(categoryId) ? categoryId.includes(option.value) : false
            )}
            onChange={handleChange}
          />
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
    </div>
  );
};

export default EditProduct;
