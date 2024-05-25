"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product-controller");
const router = express_1.default.Router();
// Call Controller Function
router.post("/products", product_controller_1.ProductController.createProduct);
router.get("/products", product_controller_1.ProductController.getAllProduct);
router.get("/products/:productId", product_controller_1.ProductController.getAProduct);
router.delete("/products/:productId", product_controller_1.ProductController.deleteProduct);
router.put("/products/:productId", product_controller_1.ProductController.updateAProduct);
router.get("/products", product_controller_1.ProductController.searchProduct);
exports.ProductRouter = router;
