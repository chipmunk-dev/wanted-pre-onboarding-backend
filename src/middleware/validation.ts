import { NextFunction, Request, Response } from 'express';
import { ValidationError, body, validationResult } from 'express-validator';

const resultCheck = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({
      errors: errors.array().map((error: ValidationError) => error.msg),
    });
  }

  return next();
};

export const memberValidation = [
  body('email')
    .notEmpty()
    .withMessage('이메일이 비어있습니다.')
    .isEmail()
    .withMessage('유효한 이메일 형식을 입력합니다.'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('비밀번호는 최소 8자 이상 입력합니다.'),
  resultCheck,
];

export const todoValidation = [
  body('contents').notEmpty().withMessage('내용을 입력합니다.'),
  resultCheck,
];
