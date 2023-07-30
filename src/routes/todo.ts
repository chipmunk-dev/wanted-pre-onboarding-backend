import express from 'express';

import {
  createTodo,
  getTodoList,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../controller/todo';
import { auth } from '../middleware/auth';

const route = express.Router();

route.post('/', auth, createTodo);
route.get('/', getTodoList);
route.get('/:id', getTodo);
route.put('/:id', auth, updateTodo);
route.delete('/:id', auth, deleteTodo);

export default route;
