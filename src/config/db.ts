import mysql, { PoolOptions } from 'mysql2';
import env from '../util/env';

const access: PoolOptions = {
  host: env.db.host,
  user: env.db.user,
  password: env.db.secret,
  port: 3306,
};

export const pool = mysql.createPool(access);
