import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAllId(): Promise<IOrder[]> {
    const query = 'SELECT orders.id, orders.user_id as userId, '
    + 'JSON_ARRAYAGG(products.id) as productsIds '
    + 'FROM Trybesmith.orders '
    + 'INNER JOIN Trybesmith.products ON orders.id = products.order_id '
    + 'GROUP BY order_id, user_id;';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IOrder[];
  }
}