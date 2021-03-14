import { Router } from "express";
const router = new Router();
import ProductController from "../controllers/product";
const { createProduct } = ProductController;

router.post("/product", createProduct);

export default router;
