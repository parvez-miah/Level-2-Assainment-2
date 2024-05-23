import express from "express";
import { OrderController } from "./order-controller";

const router = express.Router();

router.post("/orders", OrderController.createOrder);
router.get("/orders", OrderController.getOrders);
router.get("/orders/:email", OrderController.getOrderByEmail);

export const OrderRouter = router;
