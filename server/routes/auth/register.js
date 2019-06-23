import { Router } from 'express';
import queries from '../../db';
import { generateHash } from '../../utils/security/passwords';
import { createToken } from '../../utils/security/tokens';

const router = Router();

router.post('/', async (req, res) => {
    try {
        let user = req.body;
        user.hash = generateHash(req.body.password);
        delete user.password;
        let [userid] = await queries.users.insert(user);
        let token = await createToken({ userid });
        res.json({
            token,
            userid,
            role: 'guest',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

export default router;