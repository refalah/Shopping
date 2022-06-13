import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ data }) => {
  const router = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.product_img} className="card-img" />
        <Card.Body>
          <Card.Title>{data.product_title}</Card.Title>
          <Card.Text>{data.product_description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => router(`/product/${data.id}`)}
          >
            Go to details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
