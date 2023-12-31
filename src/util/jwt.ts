import jwt from 'jsonwebtoken';

import { Member } from '../types/member';
import env from '../util/env';

export const createToken = (info: Member) => {
  const { secret, expire } = env.jwt;
  return secret && jwt.sign(info, secret, { expiresIn: expire });
};

export const decodeToken = (token: string) => {
  const { secret } = env.jwt;
  return secret && jwt.verify(token, secret);
};
