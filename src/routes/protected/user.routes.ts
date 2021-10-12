import * as Express from 'express';
import GetOne from '../../controllers/user_controller/get_one';

const router = Express.Router();

router.get('/:id', GetOne);

export default router;
