import express from 'express';

import { login, register } from '../controller/member';

const route = express.Router();

route.post('/login', login);
route.post('/register', register);

export default route;
