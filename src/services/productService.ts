import { ProductModel } from 
const registerProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const { insertId } = await productsModel.registerProduct(name, amount);
  const result : IProduct = {
    name, 
    amount, 
    id: insertId,
  };
  return result;
};

export default {
  registerProduct,
};