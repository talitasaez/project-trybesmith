import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  public orderService: OrderService;

  constructor() { 
    this.orderService = new OrderService(); 
  } 

  public findAllId = async (req: Request, res: Response) => {
    const result = await this.orderService.findAllId();
    res.status(200).json(result);
  };
}
