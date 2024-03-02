import { Router } from 'express';
import * as user from '../controllers/auth.controller';
import auth from '../middlewares/auth';

const router:Router = Router();

// All users
router.get('/', auth, user.all);


// Register
router.post('/signup', user.signup);

// Login
router.post('/login', user.login);
///////////////////////////////////////////////////////////////////////////////////////////////////
//router.get('/login', user.login);


export default router;