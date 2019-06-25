import { connection as knex } from '../index';

const gamesForWeek = weekid => knex('games').select().where('weekid', weekid);

export default {
    gamesForWeek
}