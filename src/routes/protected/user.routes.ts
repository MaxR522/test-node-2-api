import * as Express from 'express';
import GetOne from '../../controllers/user_controller/get_one';
import GetAllUsers from '../../controllers/user_controller/get_all';

const router = Express.Router();

router.get('/', GetAllUsers);

router.get('/:id', GetOne);

export default router;
