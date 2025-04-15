import { Router } from 'express'
import { CreateProduct } from '../controllers/product.controller.js';

export const ProductRouter = Router();

ProductRouter.post('/create', CreateProduct)