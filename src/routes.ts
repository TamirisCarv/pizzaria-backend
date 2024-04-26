import {Router} from 'express';

// área de importação dos controllers

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
 
const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle); //pra validar o token
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);
 
// // router.get('/teste', (req:Request, res: Response) => {
// //     return res.json({nome: 'Iasmim'});
// // })

// router.get('/teste', (req:Request, res: Response) => {
//     // throw new Error('erro ao fazer requisição');
//     return res.json({nome: 'Iasmim'});
// })

export{router}