import { Router } from 'express';
import passport from 'passport';

import teamsRouter from './teams';
import usersRouter from './users';

const router = Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/teams', teamsRouter);
router.use('/users', usersRouter);

export default router;