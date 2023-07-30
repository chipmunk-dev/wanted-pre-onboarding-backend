import express from 'express';
import cors from 'cors';

import rootRouter from './routes/index';
import { pool } from './config/db';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use('/', rootRouter);

app.listen(port, () => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.error(error);
    } else {
      console.log('database connect success');
      console.log(`server connected PORT:${port}`);
      connection.release();
    }
  });
});
