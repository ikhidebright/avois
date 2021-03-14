import { Router } from "express";
const router = new Router();
import ProductController from "../controllers/product";
const {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  editProduct,
} = ProductController;

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", editProduct);

export default router;
