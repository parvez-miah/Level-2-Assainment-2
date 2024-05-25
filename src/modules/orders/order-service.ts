import { Order } from "./order-interface";
import { OrderModel } from "./order-schema";

const createOrderInDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getProductFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await OrderModel.aggregate([{ $match: { email } }]);
  return result;
};

export const OrderService = {
  createOrderInDB,
  getProductFromDB,
  getOrderByEmailFromDB,
};
