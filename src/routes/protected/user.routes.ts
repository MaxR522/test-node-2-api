import * as Express from 'express';
import GetOne from '../../controllers/user_controller/get_one';
import GetAllUsers from '../../controllers/user_controller/get_all';
import UpdateUser from '../../controllers/user_controller/update';

const router = Express.Router();

router.get('/', GetAllUsers);

router.get('/:id', GetOne);

router.put('/:id', UpdateUser);

export default router;
