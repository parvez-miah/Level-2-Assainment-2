import { Schema, model } from "mongoose";
import { Product } from "./product-interface";

const VariantSchema = new Schema({
  type: { type: String },
  value: { type: String },
});

const InventorySchema = new Schema({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const ProductSchema = new Schema<Product>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },

  tags: {
    enum: ["audio", "portable", "wireless", "speaker"],
  },
  variants: { type: [VariantSchema] },
  inventory: { type: InventorySchema },
});

export const ProductModel = model<Product>("Product", ProductSchema);
