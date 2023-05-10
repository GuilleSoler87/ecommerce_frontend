import React, { useState, useContext } from "react";
import { ProductContext } from "../../../context/contextProd/ProductState";
import Select from "react-select";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState([]);
  const [image, setImage] = useState(null);
  const { addProduct } = useContext(ProductContext);

  const options = [
    { value: 1, label: "Funkos" }, 
    { value: 2, label: "One Piece" }, 
    { value: 3, label: "Merchandising" },
    { value: 4, label: "Replica Weapons" },
    { value: 5, label: "Resin" },
  ];

  const handleChange = (selectedOptions) => {
    setCategoryId(selectedOptions.map((option) => option.value));
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
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <Select
          isMulti
          name="categoryId"
          options={options}
          value={options.filter((option) =>
            categoryId.includes(option.value)
          )}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input type="file"
          name="imageProduct"
          accept=".jpg,.png,.jpeg"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProduct;
