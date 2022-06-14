import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import { API } from "../config/api";

const Wishlist = () => {
  const router = useNavigate();
  const products = useSelector((state) => state.wishList);
  console.log(products, "products");
  // const [products, setProducts] = useState([]);
  const loadData = async () => {
    // const res = await API.get("/products");
    // setProducts(res.data.data);
  };
  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div className="container">
      <Button className="mb-3" onClick={() => router("/create-product")}>
        Add Product
      </Button>
      <div className="cards">
        <div className="row">
          {products?.map((product, index) => (
            <div className="col" style={{ padding: 10 }}>
              <CardProduct data={product} load={loadData} type="wish" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
