import passport from 'passport';

export const isGuest = (req, res, next) => {
    if (!req.user || (req.user.role !== 'guest' && req.user.role !== 'admin')) {
        res.sendStatus(401);
    } else {
        return next();
    }
};

export const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        res.sendStatus(401);
    } else {
        return next();
    }
};

export const hasToken = (req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
};