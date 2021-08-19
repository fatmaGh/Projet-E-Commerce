import React from "react";
import { addProduct } from "../../JS/action/actionProduct";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Profile.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qte, setQte] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const addProd = (e) => {
    const newProd = {
      name,
      description,
      price,
      qte,
      category,
      image,
    };
    dispatch(addProduct(newProd));
  };

  return (
    <div className="add-product" style={{marginBottom:'5%'}}>
      <form
        action="/product/upload"
        method="POST"
        enctype="multipart/form-data"
        
      >
        <h1
          style={{ fontSize: "2.3em", marginLeft: "16%", marginTop: "-7%", marginBottom:"1%"}}
          className="section_title"
        >
          Add Product
        </h1>
        <div className="form-group">
          <label
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#8f8f96"}}
            for="name"
          >
            Name
          </label>
          <input
            className="form-control" 
            type="text"
            id="name"
            value={name}
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
            }}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#8f8f96"}}
            for="description"
          >
            Description
          </label>
          <input
            className="form-control" 
            type="text"
            id="description"
            value={description}
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
            }}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#8f8f96"}}
            for="price"
          >
            Price
          </label>
          <input
            className="form-control" 
            type="text"
            id="price"
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
            }}
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#8f8f96"}}
            for="quantity"
          >
            Quantity
          </label>
          <input
            className="form-control" 
            type="text"
            id="qte"
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
            }}
            name="qte"
            value={qte}
            onChange={(e) => setQte(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#8f8f96"}}
            for="category"
          >
            Category
          </label>
          <input
            className="form-control" 
            type="text"
            id="category"
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
            }}
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="file"
            name="image"
            id="input-files"
            className="form-control-file custom-file-input"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <button
            className="button"
            type="submit"
            style={{ marginLeft: "35%", marginTop: "5%" }}
            onClick={() => addProd()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
