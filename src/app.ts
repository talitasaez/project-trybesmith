import express from 'express';
import ProductController from './controllers/productController';

const productController = new ProductController();
const app = express();

app.use(express.json());

app.post('/products', productController.registerProduct);

app.get('/products', productController.findAll);

export default app;
