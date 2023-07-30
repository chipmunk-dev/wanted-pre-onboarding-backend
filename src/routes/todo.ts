import express from 'express';

import {
  createTodo,
  getTodoList,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../controller/todo';
import { auth } from '../middleware/auth';
import { todoValidation } from '../middleware/validation';

const route = express.Router();

route.post('/', todoValidation, auth, createTodo);
route.get('/', getTodoList);
route.get('/:id', getTodo);
route.put('/:id', todoValidation, auth, updateTodo);
route.delete('/:id', auth, deleteTodo);

export default route;
