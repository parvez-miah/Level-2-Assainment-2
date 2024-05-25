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
exports.ProductService = void 0;
const product_schema_1 = require("./product-schema");
const CreateProductInDB = (Product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = product_schema_1.ProductModel.create(Product);
    return result;
});
const getAllProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schema_1.ProductModel.find();
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schema_1.ProductModel.aggregate([{ $match: { id } }]);
    return result;
});
const deleteAProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schema_1.ProductModel.aggregate([{ $match: { id } }]);
    return result;
});
const updateAProductFromDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_schema_1.ProductModel.findByIdAndUpdate(id, updateData, {
        new: true,
    });
    return result;
});
const searchProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, "i");
    const result = yield product_schema_1.ProductModel.find({
        $or: [
            { name: regex },
            { description: regex },
            { category: regex },
            { tags: regex },
        ],
    });
    return result;
});
exports.ProductService = {
    CreateProductInDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    deleteAProductFromDB,
    updateAProductFromDB,
    searchProductFromDB,
};
