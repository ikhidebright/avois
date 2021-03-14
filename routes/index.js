import { Router } from "express";
import productRoutes from "./product";

const router = new Router();

router.use("/v1", productRoutes);

export default router;
