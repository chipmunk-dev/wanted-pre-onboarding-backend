import { NextFunction, Request, Response } from 'express';
import { decodeToken } from '../util/jwt';
import { typeGuard } from '../util/typeGuard';
import { Member } from '../types/member';

export const auth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(400).json({ message: 'token이 비어있습니다.' });
  }

  try {
    const tail = token.split(' ')[1];
    const decode = decodeToken(tail);

    if (decode && typeGuard<Member>(decode, 'member_id')) {
      response.locals.member = { ...decode };
      return next();
    }
  } catch (error) {
    console.error(error);
    return response.status(401).json({ message: '유효하지 않은 token입니다.' });
  }
};
