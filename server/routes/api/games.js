import { Router } from 'express';
import queries from '../../db';
import { isAdmin } from '../../utils/middleware/routerMiddleware';

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

// admin can add a week's games
router.post('/', isAdmin, async (req, res) => {
    try {
        await queries.games.insert(req.body);
        res.json('Games added!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
    }
});

router.put('/', isAdmin, async (req, res) => {
    try {
        await queries.games.update(req.body);
        res.json('Game edited!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');

    }
});

router.delete('/', isAdmin, async (req, res) => {
    try {
        await queries.games.update(req.body);
        res.json('Game deleted!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');

    }
});

export default router;