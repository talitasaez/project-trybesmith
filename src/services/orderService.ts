import OrderModel from '../models/orderModel';
import IOrder from '../interfaces/order';
import connection from '../models/connection';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  } 

  public async findAllId(): Promise<IOrder[]> {
    const orders = await this.orderModel.findAllId();
    return orders;
  }
}
