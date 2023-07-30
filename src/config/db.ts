import mysql, { PoolOptions } from 'mysql2';
import env from '../util/env';

const access: PoolOptions = {
  host: env.db.host,
  user: env.db.user,
  password: env.db.secret,
  database: env.db.database,
  port: 3306,
};

const pool = mysql.createPool(access);
const promisePool = pool.promise();

export { pool, promisePool };
