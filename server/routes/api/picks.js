import { Router } from 'express';
import queries from '../../db';
import { isGuest, isAdmin } from '../../utils/middleware/routerMiddleware';

const router = Router();

// registered guests can make a pick
router.post('/', isGuest, async (req, res) => {
    let userid = req.user.id;
    try {
        await queries.picks.makePick({ ...req.body, userid });
        res.json('Pick made!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

// admin ability to edit which picks are winners for that weeks games
router.put('/', isAdmin, async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

export default router;