import UserModel from '../models/userModel';
import connection from '../models/connection';
import validateToken from '../utils/jwt';
import IUser from '../interfaces/user';
import IJwt from '../interfaces/jwt';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  } 

  public async registerUser(user: IUser) {
    const users = await this.userModel.registerUser(user);
    const { username } = users;
    const payload: IJwt = { username };
    const token = validateToken(payload);
    return token;
  }
}