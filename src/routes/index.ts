import * as Express from 'express';
import authRoutes from './public/auth.routes';
import userprotectedRoutes from './protected/user.routes';

import JwtVerify from '../middlewares/authorization/jwt_verify';
import checkBlacklistToken from '../middlewares/authorization/blacklisted_token_verify';

const router = Express.Router();

router.use('/auth', authRoutes);

router.use('/users', JwtVerify, checkBlacklistToken, userprotectedRoutes);

export default router;
