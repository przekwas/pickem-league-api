import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let [team] = await queries.teams.getOne(id);
            res.json(team);
        } catch (error) {
            console.log(error);
            res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
        }
    } else {
        try {
            let teams = await queries.teams.getAll();
            res.json(teams);
        } catch (error) {
            console.log(error);
            res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
        }
    }
});

export default router;