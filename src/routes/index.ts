import * as Express from 'express';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('<h1>Hello World!</h1>');
});

export default router;
