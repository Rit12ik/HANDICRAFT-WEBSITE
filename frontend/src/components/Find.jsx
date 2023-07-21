import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Find = () => {
  const [productList, setproductList] = useState([]);

  const { category } = useParams();

  const fetchProductList = async () => {
    const res = await fetch("http://localhost:2000/product/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (category) {
      setproductList(data.filter((prod) => prod.category === category));
    } else {
      setproductList(data);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const displayProducts = () => {
    if(productList.length === 0){
      return <h1>No Products Found</h1>
    }
    return productList.map((product) => (
      <div>
        <img
          className="myimage"
          src={"http://localhost:2000/" + product.image}
          alt=""
        />
        <h5>{product.name}</h5>
        <p className="h3">₹{product.price}</p>
      </div>
    ));
  };

  return (
    <div className="browse-bg">
      <header className="browse-header">
        <div className="container">
          <p className="display-3 text-dark fw-bold">Browse Handicrafts</p>
        </div>
      </header>
      <div className="container">
        <div className="box">{displayProducts()}</div>
      </div>
    </div>
  );
};

export default Find;
