import { getProducts } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.route('/products').get(getProducts);

export default router; 