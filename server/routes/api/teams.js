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
            res.sendStatus(500);
        }
    } else {
        try {
            let teams = await queries.teams.getAll();
            res.json(teams);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

export default router;