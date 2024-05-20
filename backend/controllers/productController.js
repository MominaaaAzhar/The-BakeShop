const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};