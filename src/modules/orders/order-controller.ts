// Save Orders to the database

import { Request, Response } from "express";
import { OrderService } from "./order-service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await OrderService.createOrderInDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getProductFromDB();
    res.status(200).json({
      succses: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const result = await OrderService.getOrderByEmailFromDB(email);
    res.status(200).json({
      succses: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
  getOrderByEmail,
};
