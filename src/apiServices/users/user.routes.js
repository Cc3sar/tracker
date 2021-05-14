import { Router } from 'express';
import createUser from './user.controllers';
import verifyUser from '../../middlewares/verifyUser.middleware';

const router = Router();

router.post('/', verifyUser, createUser);

export default router;