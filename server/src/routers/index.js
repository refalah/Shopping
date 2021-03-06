const express = require("express");

const {
  getAll,
  createProducts,
  getDetails,
  editProducts,
  deleteProducts,
} = require("../controllers/product");
const { uploadFile } = require("../middlewares/upload");
const router = express.Router();

router.get("/products", getAll);
router.get("/product/:id", getDetails);
router.post("/product", uploadFile("imageFile"), createProducts);
router.patch("/product/:id", uploadFile("imageFile"), editProducts);
router.delete("/product/:id", deleteProducts);

module.exports = router;
