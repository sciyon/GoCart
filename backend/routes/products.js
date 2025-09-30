import { getProducts, newProduct, getProductDetails } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProduct);
router.route('/product/:id').get(getProductDetails);

export default router; 