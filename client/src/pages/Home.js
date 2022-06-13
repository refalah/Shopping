import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import { API } from "../config/api";

const Home = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  const loadData = async () => {
    const res = await API.get("/products");
    setProducts(res.data.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <Button className="mb-3" onClick={() => router("/create-product")}>
        Add Product
      </Button>
      <div className="cards">
        <div className="row">
          {products?.map((product, index) => (
            <div className="col" style={{ padding: 10 }}>
              <CardProduct data={product} load={loadData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
