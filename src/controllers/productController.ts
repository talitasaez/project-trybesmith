import { Request, Response } from 'express';
import { ProductsService } from '../services/productService';

export default class ProductController {
  constructor(private productsService = new ProductsService()) {}

  public registerProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const result = await this.productsService.registerProduct(product);
    return res.status(201).json(result);
  };
}