"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number },
    inStock: { type: Boolean },
});
const ProductSchema = new mongoose_1.Schema({
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
exports.ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
