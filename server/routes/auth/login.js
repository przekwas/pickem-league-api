import { Router } from 'express';
import passport from 'passport';
import { createToken } from '../../utils/security/tokens';

const router = Router();

router.post('/', passport.authenticate('local'), async (req, res) => {
    try {
        let token = await createToken({ userid: req.user.id });
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

export default router;