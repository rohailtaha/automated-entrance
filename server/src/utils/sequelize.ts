import { Dialect, Sequelize } from 'sequelize';
import { DB, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './constants';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB as Dialect,
  port: 6000,
});
