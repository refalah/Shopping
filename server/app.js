const express = require("express");
const cors = require("cors");
const routers = require("./src/routers");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/v1", routers);
app.listen(port, () => {
  console.log(`Starting PORT: ${port}`);
});
