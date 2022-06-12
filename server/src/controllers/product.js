const { Products } = require("../../models");

exports.getAll = async (req, res) => {
  try {
    const user = await Products.findAll();

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Products.findOne({ where: { id } });

    res.send({
      code: 0,
      message: "Berhasil ",
      data: user,
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
