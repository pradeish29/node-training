const express = require('express');
const productController = require('../controllers/product.controllers'); // Ensure correct path

const router = express.Router();

// Destructure after importing
const { getProducts, getProduct, createProducts, updateProduct, deleteProduct } = productController;

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = { productRoute: router };
