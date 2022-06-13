import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";

const EditProduct = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({ product_img: null });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
    console.log(form, "DAA");
  };

  const [data, setData] = useState();
  const loadData = async () => {
    const res = await API.get(`/product/${id}`);
    setForm(res.data.data);
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

      const response = await API.patch(`/product/${id}`, formData, config);
      router(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const [chosenFile, setChosenFile] = useState();

  const handlePreview = async (e) => {
    //pictureSelected(e);
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setChosenFile(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setForm({
        ...form,
        [e.target.name]:
          e.target.type === "file" ? e.target.files[0] : e.target.value,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (form.product_img) {
      setChosenFile(form.product_img);
      return;
    }

    if (!form.product_img) {
      setChosenFile(undefined);
      return;
    }
  }, [form.product_img]);

  console.log(form?.product_img, "img");

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product_title"
            value={form?.product_title}
            placeholder="Enter name of product"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            name="product_description"
            value={form?.product_description}
            placeholder="Enter description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="product_price"
            value={form?.product_price}
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
              onChange={(e) => handlePreview(e)}
              hidden
            />
            <label for="add-thumb" id="label-thumb" className="btn-img">
              Attach Thumbnail{" "}
            </label>
          </div>
        </Form.Group>
        <div>
          {chosenFile && (
            <img
              src={chosenFile}
              style={{
                maxHeight: "200px",
              }}
            />
          )}
        </div>
        <Button onClick={() => handleSubmit()}>Edit</Button>
      </Form>
    </div>
  );
};

export default EditProduct;
