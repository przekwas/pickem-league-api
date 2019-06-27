import { connection as knex } from '../index';

const gamesForWeek = weekid => knex('games').select().where('weekid', weekid);
const insert = query => knex('games').insert(query);

export default {
    gamesForWeek,
    insert
}