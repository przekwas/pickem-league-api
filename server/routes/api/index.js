import { Router } from 'express';

import teamsRouter from './teams';
import usersRouter from './users';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/users', usersRouter);

export default router;