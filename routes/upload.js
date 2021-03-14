import { Router } from "express";
const router = new Router();
import upload from "../middleware/uploader";
import UploadController from "../controllers/upload";
const { uploadMultipleFile } = UploadController;

router.post("/upload/multiple", [upload.array("file", 5)], uploadMultipleFile);

export default router;
