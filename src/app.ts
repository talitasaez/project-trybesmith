import express from 'express';
import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

const app = express();

app.use(express.json());

app.get('/products', productController.findAll);
app.post('/products', productController.registerProduct);

app.post('/users', userController.registerUser);

app.get('/orders', orderController.findAllId);

export default app;
