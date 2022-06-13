import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";

const Details = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const loadData = async () => {
    const res = await API.get(`/product/${id}`);
    setData(res.data.data);
  };
  console.log(data, "data");
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      {/* <Stack direction="horizontal" className="stacks" gap={3}> */}
      <div className="d-flex w-100 justify-content-between align-items-center">
        <img src={data?.product_img} className="new-img" style={{ flex: 1 }} />
        <div style={{ flex: 1, marginLeft: 50 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="product_title"
                placeholder="Enter name of product"
                value={data?.product_title}
                disabled
                // onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="product_description"
                placeholder="Enter description"
                value={data?.product_description}
                disabled
                // onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="product_price"
                placeholder="Enter price"
                value={data?.product_price}
                disabled
                // onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* </Stack> */}
    </div>
  );
};

export default Details;
