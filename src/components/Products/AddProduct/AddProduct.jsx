import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../../context/contextProd/ProductState";
import { CategoryContext } from "../../../context/categoryContext/CategoryState";
import { Select, Space } from 'antd';
import "./AddProduct.scss"

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState([]);
  const [image, setImage] = useState(null);
  const { addProduct } = useContext(ProductContext);
  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories()
  }, [])

  const options = categories.map(category => {
    return { value: category.id, label: category.name }
  })
  const handleChange = (value) => {
    setCategoryId(value)
    console.log(value)
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categoryId)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    for (let i = 0; i < categoryId.length; i++) {
      formData.append('CategoryId', categoryId[i]);
    }
    formData.append("image", image);

    addProduct(formData)
      .then((res) => {
        console.log("Product successfully uploaded");
        window.location.reload(); // recarga la página
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container-addp">
      <button className="back-button" onClick={() => window.location.reload()}>X</button>
      <form className="form-addp" onSubmit={handleSubmit}>
        <div className="form__group-addp">
          <label className="form__label-addp" htmlFor="name">
            <span>Nombre de Producto:</span>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form__input-addp"
            />
          </label>
        </div>
        <div className="form__group-addp">
          <label className="form__label-addp" htmlFor="price">
            <span>Precio:</span>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form__input-addp"
            />
          </label>
        </div>
        <div className="form__group-addp">
          <label className="form__label-addp" htmlFor="description">
            <span>Descripción:</span>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form__textarea-addp"
            ></textarea>
          </label>
        </div>
        <div className="form__group-addp">
          <label className="form__label--select-addp" htmlFor="category">
            <b><span>Categoría:</span></b>
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
                  zIndex: 100
                }}
                placeholder="Selecciona una categoría"
                defaultValue={categories.map(category => category.name)}
                onChange={handleChange}
                options={options}
              />

            </Space>
          </label>
        </div>
        <div className="form__group-addp">
          <label className="form__label--image-addp" htmlFor="image">
            <b><span style={{ marginRight: '6px' }}>Imagen:</span></b>
            <input
              type="file"
              id="image"
              name="imageProduct"
              accept=".jpg,.png,.jpeg"
              onChange={handleImageChange}
              className="form__input-addp"
            />
          </label>
        </div>
        <div className="form__group-addp">
          <button type="submit" className="form__button-addp">
            Añadir producto
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
