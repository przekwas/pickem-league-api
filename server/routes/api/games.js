import { Router } from 'express';
import queries from '../../db';

const router = Router();

// get a set of games for a given week
router.get('/:weekid', async (req, res) => {
    let weekid = req.params.id;
    try {
        let gamesForTheWeek = await queries.games.gamesForWeek(weekid);
        res.json(gamesForTheWeek);
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

export default router;