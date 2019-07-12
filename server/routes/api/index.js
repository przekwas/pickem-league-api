import { Router } from 'express';
import { hasToken } from '../../utils/middleware/routerMiddleware';

import teamsRouter from './teams';
import usersRouter from './users';
import picksRouter from './picks';
import gamesRouter from './games';

const router = Router();

router.use(hasToken);

router.use('/teams', teamsRouter);
router.use('/users', usersRouter);
router.use('/picks', picksRouter);
router.use('/games', gamesRouter);

export default router;