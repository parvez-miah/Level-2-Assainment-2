import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./modules/product/product-route";
import { OrderRouter } from "./modules/orders/order-route";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api", ProductRouter);
app.use("/api", OrderRouter);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
