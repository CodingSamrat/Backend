import { Router } from 'express'
import { CreateUser, DeleteUser, GetAllUser, GetUserById, UpdateUser } from '../controllers/user.controller.js';

export const UserRouter = Router();

UserRouter.post('/create', CreateUser);
UserRouter.get('/get', GetAllUser);
UserRouter.get('/get/:id', GetUserById);
UserRouter.put('/update/:id', UpdateUser);
UserRouter.delete('/delete/:id', DeleteUser);