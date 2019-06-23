import { connection as knex } from '../index';

const insertUserid = id => knex('tokens').insert(id);
const updateWithToken = (id, values) => knex('tokens').update(values).where('id', id);
const findOne = query => knex('tokens').select().where(query);
const deleteOne = id => knex('tokens').delete().where(id);

export default {
    insertUserid,
    updateWithToken,
    findOne,
    deleteOne
}