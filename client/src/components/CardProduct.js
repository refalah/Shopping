import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const CardProduct = ({ data, load, type }) => {
  const router = useNavigate();
  const deleteProduct = async () => {
    const res = await API.delete(`/product/${data.id}`);
    load();
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.product_img} className="card-img" />
      <Card.Body>
        <Card.Title>{data.product_title}</Card.Title>
        <Card.Text>{data.product_description}</Card.Text>
        <div
          style={{ flexDirection: "column" }}
          className="d-flex justify-content-evenly"
        >
          <Button
            variant="primary"
            className="w-100"
            onClick={() => router(`/product/${data.id}`)}
          >
            Details
          </Button>
          {type != "wish" ? (
            <Button variant="danger" onClick={() => deleteProduct()}>
              Delete
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
