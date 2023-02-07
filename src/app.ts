import express from 'express';
import ProductController from './controllers/productController';

const productController = new ProductController();
const app = express();

app.use(express.json());

app.post('/products', (req, res) => {
  productController.registerProduct(req, res);
});

export default app;
