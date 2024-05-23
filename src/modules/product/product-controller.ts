import { Request, Response } from "express";
import { ProductService } from "./product-service";

// Create Product Save to database

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;
    const result = await ProductService.CreateProductInDB(ProductData);

    res.status(200).json({
      succses: true,
      message: "Data Successfully Added",
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

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();
    res.status(200).json({
      succses: true,
      message: "Data Successfully Retrived",
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

const getAProduct = async (req: Request, res: Response) => {
  try {
    const { id: productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      succses: true,
      message: "Data Successfully Retrived",
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id: productId } = req.params;
    const result = await ProductService.deleteAProductFromDB(productId);
    res.status(200).json({
      succses: true,
      message: "Product Successfully Deleted",
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

const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { id: productId } = req.params;
    const updateData = req.body;
    const result = await ProductService.updateAProductFromDB(
      productId,
      updateData
    );

    res.status(200).json({
      success: true,
      message: "Product successfully updated",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.body;

    if (!searchTerm || typeof searchTerm !== "string") {
      return res.status(400).json({
        success: false,
        message: "Not Query found",
      });
    }

    const result = await ProductService.searchProductFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products successfully retrieved",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getAProduct,
  deleteProduct,
  updateAProduct,
  searchProduct,
};
