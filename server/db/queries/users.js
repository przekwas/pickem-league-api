import { connection as knex } from '../index';

const getAll = () => knex('users').select('username');
const getOne = id => knex('users').select('username').where('id', id);
const findOne = query => knex('users').select().where(query);
const insert = query => knex('users').insert(query);

export default {
    getAll,
    getOne,
    findOne,
    insert
}