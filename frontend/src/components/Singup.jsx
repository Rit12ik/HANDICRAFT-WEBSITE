import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
const singupSchema = Yup.object().shape({});

const Singup = () => {

  const navigate = useNavigate();

  const singupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:2000/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "User Registered Successfully",
          text: "Please Login to Continue",
        });
        navigate("/login");
      }
    },
    validationSchema: singupSchema,
  });
  return (
    <div className="signup-bg my-bg">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="singup">
          <form onSubmit={singupForm.handleSubmit}>
            <h3>Sign In</h3>
            <span style={{ color: "red", fontSize: 14, marginLeft: 0 }}>
              {singupForm.touched.name && singupForm.errors.name}
            </span>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={singupForm.handleChange}
              value={singupForm.values.name}
              className="SI"
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.email && singupForm.errors.email}
            </span>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.email}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.gender && singupForm.errors.gender}
            </span>
            <label htmlFor="gender">Gender</label>
            <input
              type="gender"
              name="gender"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.gender}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.contact && singupForm.errors.contact}
            </span>
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              name="contact"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.contact}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.date && singupForm.errors.date}
            </span>
            <label htmlFor="date">DOB</label>
            <input
              type="date"
              name="date"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.date}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.address && singupForm.errors.address}
            </span>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.address}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {singupForm.touched.date && singupForm.errors.date}
            </span>
            <label htmlFor="code">Password</label>
            <input
              type="text"
              name="password"
              className="SI"
              onChange={singupForm.handleChange}
              value={singupForm.values.password}
            />
            <div className=" text-center">
              <button
                className="SIBT"
                type="submit"
                onChange={singupForm.handleChange}
              >
                Send{alert.type}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
