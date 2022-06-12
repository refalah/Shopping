import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const CreateProduct = () => {
  const router = useNavigate();
  const [form, setForm] = useState({ product_img: null });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
    console.log(form, "DAA");
  };
  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("product_title", form.product_title);
      formData.append("imageFile", form.product_img, form.product_img.name);
      formData.set("product_price", form.product_price);
      formData.set("product_description", form.product_description);

      const response = await API.post("/product", formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  const [chosenFile, setChosenFile] = useState();

  useEffect(() => {
    if (!form.product_img) {
      setChosenFile(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(form.product_img);
    setChosenFile(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form.product_img]);

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product_title"
            placeholder="Enter name of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            name="product_description"
            placeholder="Enter description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="product_price"
            placeholder="Enter price"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Image</Form.Label>
          <div>
            <input
              type="file"
              id="add-thumb"
              name="product_img"
              onChange={(e) => handleChange(e)}
              hidden
            />
            <label for="add-thumb" id="label-thumb" className="btn">
              Attach Thumbnail{" "}
            </label>
          </div>
        </Form.Group>
        <div>
          {
            <img
              src={chosenFile}
              style={{
                maxHeight: "200px",
              }}
            />
          }
        </div>
        <Button onClick={() => handleSubmit()}>Create</Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
