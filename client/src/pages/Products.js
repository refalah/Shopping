import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const router = useNavigate();
  return (
    <div className="container">
      <Button onClick={() => router("/create-product")}>Create Product</Button>
    </div>
  );
};

export default Products;
