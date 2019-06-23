import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';

import queries from '../../db';
import { validateToken } from '../security/tokens';

passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await validateToken(token);
        let [user] = await queries.users.findOne({ id: payload.userid });
        delete user.hash;
        if (user) {
            done(null, user);
        } else {
            done(null, false)
        }
    } catch (error) {
        done(error);
    }
}));