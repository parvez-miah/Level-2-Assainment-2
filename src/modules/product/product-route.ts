import express from "express";
import { ProductController } from "./product-controller";

const router = express.Router();
// Call Controller Function

router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.getAllProduct);
router.get("/products/:productId", ProductController.getAProduct);
router.delete("/products/:productId", ProductController.deleteProduct);
router.put("/products/:productId", ProductController.updateAProduct);
router.get("/products", ProductController.searchProduct);

export const ProductRouter = router;
