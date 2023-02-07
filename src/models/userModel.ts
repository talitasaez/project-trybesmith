import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async registerUser(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?,?,?,?)',
      [username, vocation, level, password],
    );
    const newUser = {
      id: insertId,
      username,
      vocation,
      level, 
      password,
    }; 

    return newUser;
  }
}