import passport from 'passport';
import LocalStrategy from 'passport-local';

import queries from '../../db';
import { comparePassword } from '../security/passwords';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy.Strategy({
    usernameField: 'username',
    session: false
}, async (username, password, done) => {
    try {
        let [user] = await queries.users.findOne({ username });
        if (user && comparePassword(password, user.hash)) {
            delete user.hash;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}));