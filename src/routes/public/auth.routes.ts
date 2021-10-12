import * as Express from 'express';

import Register from '../../controller/user_controller/auth/register';
import Login from '../../controller/user_controller/auth/login';

import fieldValidatorFor from '../../middlewares/validators/field_validators';
import checkValidationResult from '../../middlewares/validators/check_field_validators';
import checkUserDuplicate from '../../middlewares/user/check_user_duplicate';
import checkLoginValidationResult from '../../middlewares/validators/check_login_validators';

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

export default router;
