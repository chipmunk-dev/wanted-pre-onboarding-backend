import express from 'express';

import memberRouter from './member';
import todoRouter from './todo';

const route = express.Router();

route.use('/members', memberRouter);
route.use('/todos', todoRouter);

export default route;
