import { Product } from "./product-interface";
import { ProductModel } from "./product-schema";

const CreateProductInDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteAProductFromDB = async (id: string) => {
  const result = await ProductModel.aggregate([{ $match: { id } }]);
  return result;
};

const updateAProductFromDB = async (
  id: string,
  updateData: Partial<Product>
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return result;
};

const searchProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  const result = await ProductModel.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  });
  return result;
};

export const ProductService = {
  CreateProductInDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDB,
  updateAProductFromDB,
  searchProductFromDB,
};
