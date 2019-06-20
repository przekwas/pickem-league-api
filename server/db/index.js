import knex from 'knex';
import config from '../config';

import teams from './queries/teams';

export const connection = knex(config.knex);

export default {
    teams
}