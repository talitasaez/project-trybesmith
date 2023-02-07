import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  public userService: UserService;

  constructor() { 
    this.userService = new UserService(); 
  } 

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.registerUser(user);
    res.status(201).json({ token });
  };
}