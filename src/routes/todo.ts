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

route.post('/', auth, todoValidation, createTodo);
route.get('/', getTodoList);
route.get('/:id', getTodo);
route.put('/:id', auth, todoValidation, updateTodo);
route.delete('/:id', auth, deleteTodo);

export default route;
