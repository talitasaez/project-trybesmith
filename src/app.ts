import express from 'express';
import productsController from './controllers/productController';
//
const app = express();

app.use(express.json());

app.post('/products', productsController.registerProducts);

export default app;
