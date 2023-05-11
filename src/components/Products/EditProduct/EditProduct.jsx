import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/contextProd/ProductState";
import Select from "react-select";

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
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setCategoryId(product.categoryId);
  }, [product]);

  const options = [
    { value: 1, label: "Funkos" },
    { value: 2, label: "One Piece" },
    { value: 3, label: "Merchandising" },
    { value: 4, label: "Replica Weapons" },
    { value: 5, label: "Resin" },
  ];

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categoryId", JSON.stringify(categoryId));
    formData.append("image", image);

    updateProductId(id, formData)
      .then((res) => {
        setMessage("Producto actualizado exitosamente");
        setTimeout(() => {
          navigate("/");
        }, 3000);
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
    <form onSubmit={onHandleSubmit}>
      <div>
        <label>
          Nombre de Producto:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Precio:
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
            name="price"
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
            name="description"
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Categoría:
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
      </div>
      <div>
        <label>
          Imagen:
          <input
            type="file"
            name="imageProduct"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <button type="submit">Editar</button>
      <h1>{message}</h1>
    </form>
  );
};

export default EditProduct;
