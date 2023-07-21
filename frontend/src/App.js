import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Login from "./components/Login";
import Lights from "./components/Lights";
import Hanging from "./components/Hanging";
import Decor from "./components/Decor";
import Statues from "./components/Statues";
import AddProduct from "./components/AddProduct";
import Singup from "./components/Singup";
import ManageProducts from "./components/ManageProduct";
import ListProduct from "./components/ListProduct";
import { UserProvider } from "./UserContext";
import Find from "./components/Find";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="Login" />
            <Route element={<Singup />} path="signup" />
            <Route element={<Lights />} path="Lights" />
            <Route element={<Hanging />} path="Hanging" />
            <Route element={<Statues />} path="Statues" />
            <Route element={<Decor />} path="Decor" />
            <Route element={<AddProduct />} path="Addproduct" />
            <Route element={<ManageProducts />} path="Manageproduct" />
            <Route element={<ListProduct />} path="browse" />
            <Route element={<Find />} path="browse/:category" />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
