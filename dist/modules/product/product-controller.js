"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product-service");
// Create Product Save to database
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: ProductData } = req.body.product;
        const result = yield product_service_1.ProductService.CreateProductInDB(ProductData);
        res.status(200).json({
            succses: true,
            message: "Data Successfully Added",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProductFromDB();
        res.status(200).json({
            succses: true,
            message: "Data Successfully Retrived",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: productId } = req.params;
        const result = yield product_service_1.ProductService.getSingleProductFromDB(productId);
        res.status(200).json({
            succses: true,
            message: "Data Successfully Retrived",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: productId } = req.params;
        const result = yield product_service_1.ProductService.deleteAProductFromDB(productId);
        res.status(200).json({
            succses: true,
            message: "Product Successfully Deleted",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: err,
        });
    }
});
const updateAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.ProductService.updateAProductFromDB(productId, updateData);
        res.status(200).json({
            success: true,
            message: "Product successfully updated",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.body;
        if (!searchTerm || typeof searchTerm !== "string") {
            return res.status(400).json({
                success: false,
                message: "Not Query found",
            });
        }
        const result = yield product_service_1.ProductService.searchProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products successfully retrieved",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getAProduct,
    deleteProduct,
    updateAProduct,
    searchProduct,
};
