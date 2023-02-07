import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async registerProduct(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES(?,?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name, 
      amount,
    }; 
    return newProduct;
  }

  async findAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return rows as IProduct[];
  }
}