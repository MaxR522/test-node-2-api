import * as Express from 'express';

import Register from '../../controllers/user_controller/auth/register';
import Login from '../../controllers/user_controller/auth/login';
import Logout from '../../controllers/user_controller/auth/logout';

import fieldValidatorFor from '../../middlewares/validators/field_validators';
import checkValidationResult from '../../middlewares/validators/check_field_validators';
import checkUserDuplicate from '../../middlewares/user/check_user_duplicate';
import checkLoginValidationResult from '../../middlewares/validators/check_login_validators';
import JwtVerify from '../../middlewares/authorization/jwt_verify';
import checkBlacklistToken from '../../middlewares/authorization/blacklisted_token_verify';

const router = Express.Router();

router.post(
  '/register',
  fieldValidatorFor('register'),
  checkValidationResult,
  checkUserDuplicate,
  Register,
);

router.post(
  '/login',
  fieldValidatorFor('login'),
  checkLoginValidationResult,
  Login,
);

router.post('/logout', JwtVerify, checkBlacklistToken, Logout);

export default router;
