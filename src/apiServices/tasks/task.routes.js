import { Router } from 'express';
import createTask from './task.controllers';
import verifyTask from '../../middlewares/verifyTask.middleware';

const router = Router();

router.post('/:_id/exercises', verifyTask, createTask);

export default router;