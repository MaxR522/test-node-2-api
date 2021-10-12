import * as Express from 'express';

import Register from '../../controller/user_controller/auth/register';

import fieldValidatorFor from '../../middlewares/validators/field_validators';
import checkValidationResult from '../../middlewares/validators/check_field_validators';
import checkUserDuplicate from '../../middlewares/user/check_user_duplicate';

const router = Express.Router();

router.post(
  '/register',
  fieldValidatorFor('register'),
  checkValidationResult,
  checkUserDuplicate,
  Register,
);

export default router;
