import express from 'express';

import { login, register } from '../controller/member';
import { memberValidation } from '../middleware/validation';

const route = express.Router();

route.post('/login', memberValidation, login);
route.post('/register', memberValidation, register);

export default route;
