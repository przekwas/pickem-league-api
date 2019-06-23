import { Router } from 'express';
import { hasToken } from '../../utils/middleware/routerMiddleware';

import teamsRouter from './teams';
import usersRouter from './users';
import picksRouter from './picks';

const router = Router();

router.use(hasToken);

router.use('/teams', teamsRouter);
router.use('/users', usersRouter);
router.use('/picks', picksRouter);

export default router;