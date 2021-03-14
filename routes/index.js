import { Router } from "express";
import productRoutes from "./product";
import variantRoutes from "./variant";
import uploadRoutes from "./upload";

const router = new Router();

router.use("/v1", productRoutes);
router.use("/v1", variantRoutes);
router.use("/v1", uploadRoutes);

export default router;
