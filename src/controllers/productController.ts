/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  public productService: ProductService;

  constructor() { 
    this.productService = new ProductService(); 
  } 

  public registerProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.productService.registerProduct(name, amount);
    
    res.status(201).json(result);
  };
}
