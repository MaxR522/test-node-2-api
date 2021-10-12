import * as Express from 'express';
import GetOne from '../../controllers/user_controller/get_one';
import GetAllUsers from '../../controllers/user_controller/get_all';
import UpdateUser from '../../controllers/user_controller/update';
import UpdateUserPassword from '../../controllers/user_controller/update_password';

import fieldValidatorFor from '../../middlewares/validators/field_validators';
import checkValidationResult from '../../middlewares/validators/check_field_validators';

const router = Express.Router();

router.get('/', GetAllUsers);

router.get('/:id', GetOne);

router.put('/:id', UpdateUser);

router.put(
  '/:id/password',
  fieldValidatorFor('pwd_change'),
  checkValidationResult,
  UpdateUserPassword,
);

export default router;
