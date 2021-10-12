import * as Express from 'express';
import authRoutes from './public/auth.routes';

const router = Express.Router();

router.use('/auth', authRoutes);

export default router;
