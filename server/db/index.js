import knex from 'knex';
import config from '../config';

import teams from './queries/teams';
import users from './queries/users';
import tokens from './queries/tokens';
import picks from './queries/picks';

export const connection = knex(config.knex);

export default {
    teams,
    users,
    tokens,
    picks
}