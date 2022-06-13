const { Products } = require("../../models");
require("dotenv").config();

const { IMG_PATH } = process.env;

exports.getAll = async (req, res) => {
  try {
    const path = IMG_PATH;

    let product = await Products.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    product = JSON.parse(JSON.stringify(product));
    product = product.map((p) => {
      return {
        ...p,
        product_img: path + p.product_img,
      };
    });
    res.send({
      code: 0,
      message: "Berhasil ",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const path = IMG_PATH;

    let product = await Products.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    product.product_img = path + product.product_img;
    // product = JSON.parse(JSON.stringify(product));
    // product = product.map((p) => {
    //   return {
    //     ...p,
    //     product_img: path + p.product_img,
    //   };
    // });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createProducts = async (req, res) => {
  try {
    console.log("Creating...");
    const img = req.files.imageFile[0].filename;

    if (img == null) {
      return res.send({
        status: "failed",
        message: "image does not exist",
      });
    }
    const product = await Products.create({ ...req.body, product_img: img });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Products.update({ ...req.body }, { where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Products.destroy({ where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
