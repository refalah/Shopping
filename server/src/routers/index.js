const express = require("express");

const {
  getAll,
  createProducts,
  getDetails,
  editProducts,
  deleteProducts,
} = require("../controllers/product");
const router = express.Router();

router.get("/products", getAll);
router.get("/product/:id", getDetails);
router.post("/product", createProducts);
router.patch("/product/:id", editProducts);
router.delete("/product/:id", deleteProducts);

module.exports = router;
