import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../../context/contextProd/ProductState";
import { CategoryContext } from "../../../context/categoryContext/CategoryState";
import Select from "react-select";
import "./AddProduct.scss"

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState([]);
  const [image, setImage] = useState(null);
  const { addProduct } = useContext(ProductContext);
  const { categories,getCategories } = useContext(CategoryContext);

useEffect (() => {
  getCategories ()
},[])

  // const options = [
  //   { value: 1, label: "Funkos" },
  //   { value: 2, label: "One Piece" },
  //   { value: 3, label: "Merchandising" },
  //   { value: 4, label: "Replica Weapons" },
  //   { value: 5, label: "Resin" },
  // ];

  const handleChange = (selectedOptions) => {
    setCategoryId(selectedOptions.map((option) => option.id));
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categoryId", JSON.stringify(categoryId));
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
            <span>Categoría:</span>
            <Select
              isMulti
              id="category"
              name="categoryId"
              options={categories}
              value={categories.filter((option) =>
                categoryId.includes(option.value)
              )}
              onChange={handleChange}
              className="form__select-addp"
            />
          </label>
        </div>
        <div className="form__group-addp">
          <label className="form__label--image-addp" htmlFor="image">
            <span>Imagen:</span>
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
