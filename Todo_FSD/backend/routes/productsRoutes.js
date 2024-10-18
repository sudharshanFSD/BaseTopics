const express = require("express");
const Product = require("../models/Product"); // Assuming Product model exists
const router = express.Router();

// Middleware to authenticate user (replace with your actual authentication middleware)
const authenticate = async (req, res, next) => {
  // This is a placeholder; implement your actual authentication logic
  const userId = req.userId; // Assuming you set userId in request after authenticating the user
  if (!userId) {
    return res.status(401).send("User not authenticated");
  }
  req.userId = userId; // Attach user ID to the request for later use
  next();
};

// Create a new product (Todo item)
router.post("/products", authenticate, async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      user: req.userId, // Associate product with the logged-in user
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all products (all Todo items) for the authenticated user
router.get("/products", authenticate, async (req, res) => {
  try {
    const products = await Product.find({ user: req.userId }); // Find products for the logged-in user
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a product by ID (specific Todo item) for the authenticated user
router.get("/products/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, user: req.userId }); // Check if the product belongs to the user
    if (!product) {
      return res.status(404).send("Product not found or you do not have access");
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a product by ID (specific Todo item) for the authenticated user
router.put("/products/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, user: req.userId }, // Check if the product belongs to the user
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).send("Product not found or you do not have access");
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a product by ID (specific Todo item) for the authenticated user
router.delete("/products/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id, user: req.userId }); // Check if the product belongs to the user
    if (!product) {
      return res.status(404).send("Product not found or you do not have access");
    }
    res.status(200).send("Product deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
