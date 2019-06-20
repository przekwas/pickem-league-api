import { connection as knex } from '../index';

const getAll = () => knex('teams').select();
const getOne = id => knex('teams').select().where('id', id);

export default {
    getAll,
    getOne
}