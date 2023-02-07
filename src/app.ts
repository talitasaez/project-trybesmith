import express from 'express';
import ProductController from './controllers/productController';
import UserController from './controllers/userController';

const productController = new ProductController();
const userController = new UserController();

const app = express();

app.use(express.json());

app.get('/products', productController.findAll);
app.post('/products', productController.registerProduct);

app.post('/users', userController.registerUser);

export default app;
