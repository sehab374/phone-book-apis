import express, { Router, Request, Response, NextFunction } from 'express';
import auth from './auth';
import createError from 'http-errors';
import contactsRoutes from './contacts';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});


//http://localhost:3000/auth/login
//http://localhost:3000/auth/signup
router.use('/auth', auth);

router.use('/contact', contactsRoutes);


router.use(async (req: Request, res: Response, next: NextFunction) => {
    next(createError.NotFound('Route not Found'));
});

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    });
});

export default router;
