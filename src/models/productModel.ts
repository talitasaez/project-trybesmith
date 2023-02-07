import { RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/product';
import connection from './connection';

// async registerProduct(name: string, amount: string): Promise<IProduct> {
//   const [{insertId}] = await connection.execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.products(name, amount) VALUES(?, ?)', [name, amount]
//  )
//   const newProduct = {
//     id: insertId, 
//     name, 
//     amount,
//   };

//     return newProduct;
//   }
export default class ProductModel {
  async findAll(): Promise<IProduct[]> {
    const [result] = await connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return result;
  }
}
