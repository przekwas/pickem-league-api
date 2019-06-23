import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let [user] = await queries.users.getOne(id);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
        }
    } else {
        try {
            let users = await queries.users.getAll();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json('Uh oh! Luke\'s code sucks.  Let him know!');
        }
    }
});

export default router;