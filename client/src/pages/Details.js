import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { actions } from "../store";

const Details = () => {
  const router = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [coin, setCoin] = useState(false);
  const products = useSelector((state) => state.wishList);
  const exist = products.find((item) => item.id == id);
  const loadData = async () => {
    const res = await API.get(`/product/${id}`);
    setData(res.data.data);
  };
  const handleWishlist = () => {
    // setCoin(!coin);
    if (!exist) {
      dispatch(
        actions.createWishlist({
          id,
          product_title: data?.product_title,
          product_description: data?.product_description,
          product_price: data?.product_price,
          product_img: data?.product_img,
        })
      );
    } else {
      dispatch(actions.removeWishlist(id));
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      {/* <Stack direction="horizontal" className="stacks" gap={3}> */}
      <div className="d-flex align-items-center">
        <Button
          onClick={() => router(`/edit-product/${id}`)}
          style={{ marginRight: 20 }}
        >
          Edit Product
        </Button>
        <FontAwesomeIcon
          icon={faHeart}
          className={`ml-5 mt-2 ${exist ? "list" : null} `}
          onClick={() => handleWishlist()}
          style={{ cursor: "pointer" }}
          size="lg"
        />
      </div>
      <div className="d-flex w-100 justify-content-between mt-4 mb-5">
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
                as={"textarea"}
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
