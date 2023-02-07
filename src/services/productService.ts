import ProductModel from '../models/productModel';
import IProduct from '../interfaces/product';
import connection from '../models/connection';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  } 

  public async registerProduct(name: string, amount: string): Promise<IProduct> {
    return this.productModel.registerProduct(name, amount);
  }
}
