import { Router } from "express";
const router = new Router();
import ProductController from "../controllers/product";
const { createVariants, editVariants, deleteVariants } = ProductController;

router.post("/variants", createVariants);
router.patch("/variants/:id", editVariants);
router.delete("/variants/:id", deleteVariants);

export default router;
