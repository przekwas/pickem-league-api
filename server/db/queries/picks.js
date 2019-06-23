import { connection as knex } from '../index';

const makePick = query => knex('picks').insert(query);

export default {
    makePick
}