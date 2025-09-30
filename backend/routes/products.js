import { getProducts, newProduct, getProductDetails, updateProduct } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProduct);
router.route('/product/:id').get(getProductDetails);
router.route('/product/:id').put(updateProduct);

export default router; 