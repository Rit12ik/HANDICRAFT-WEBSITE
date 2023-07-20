import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useState } from "react";
const addProductSchema = Yup.object().shape({});

const AddProduct = () => {
  const [selFile, setSelFile] = useState("");

  const addProductForm = useFormik({
    initialValues: {
      name: "",
      category: "decor-item",
      price: 0,
      discription: "",
      material: "",
      image: "",
    },

    onSubmit: async (values) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:2000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Singup Successfully",
          text: "Go to login page",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
    },

    validationSchema: addProductSchema,
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:2000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <form onSubmit={addProductForm.handleSubmit}>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="add-product">
            <h4>Add Your Product</h4>
            <span style={{ color: "red", fontSize: 14 }}>
              {addProductForm.touched.name && addProductForm.errors.name}
            </span>

            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="myinput2"
              onChange={addProductForm.handleChange}
              value={addProductForm.values.name}
              name="name"
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {addProductForm.touched.name && addProductForm.errors.name}
            </span>

            <label htmlFor="product">Category</label>
            <select
              className="myinput2"
              onChange={addProductForm.handleChange}
              value={addProductForm.values.category}
              name="category"
            >
              <option value="decor-item">Decor Items</option>
              <option value="hanging-item">Hanging Items</option>
              <option value="lamp">Lamps & Lights</option>
              <option value="statue">Statues and Sculptures</option>
            </select>
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {addProductForm.touched.category &&
                addProductForm.errors.category}
            </span>
            <label htmlFor="prize">Price</label>
            <input
              type="number"
              className="myinput2"
              onChange={addProductForm.handleChange}
              value={addProductForm.values.price}
              name="price"
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {addProductForm.touched.name && addProductForm.errors.name}
            </span>
            <label htmlFor="discription">Discription</label>
            <textarea
              name="discription"
              id=""
              type="discription"
              onChange={addProductForm.handleChange}
              value={addProductForm.values.discription}
              className="myinput2"
            ></textarea>
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {addProductForm.touched.name && addProductForm.errors.name}
            </span>
            <label htmlFor="material">Material</label>
            <input
              type="material"
              name="material"
              onChange={addProductForm.handleChange}
              value={addProductForm.values.material}
              className="myinput2"
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {addProductForm.touched.name && addProductForm.errors.name}
            </span>
            <label htmlFor="file">Upload Image</label>
            <br />

            <input
              type="file"
              name="file"
              onChange={uploadFile}
              className="myinput2"
            />

            <div>
              <button
                className="save"
                type="submit"
                onChange={addProductForm.handleChange}
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
