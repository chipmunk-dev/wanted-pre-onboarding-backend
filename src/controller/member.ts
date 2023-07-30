import { Request, Response } from 'express';
import { promisePool } from '../config/db';
import { comparePassword, createHashPassword } from '../util/bcrypt';
import { typeGuard } from '../util/typeGuard';
import { Member } from '../types/member';
import { memberToMemberResponseDto } from '../mapper/member';
import { createToken } from '../util/jwt';

export const login = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  try {
    const [result] = await promisePool.query(
      `SELECT * FROM members WHERE email='${email}'`
    );

    if (Array.isArray(result)) {
      if (result.length < 1) {
        return response
          .status(400)
          .json({ message: '일치하지 않은 이메일 또는 패스워드입니다.' });
      }

      const member = result[0];

      if (typeGuard<Member>(member, 'member_id')) {
        const isMatch = comparePassword(password, member.password);

        if (isMatch) {
          const responseDto = memberToMemberResponseDto(member);
          const accessToken = createToken(member);

          if (!accessToken) {
            return response.status(500).json({
              error:
                '토큰 생성에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
            });
          }

          return response
            .status(200)
            .json({
              member: responseDto,
              accessToken: `Bearer ${accessToken}`,
            });
        } else {
          return response
            .status(400)
            .json({ message: '일치하지 않은 이메일 또는 패스워드입니다.' });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};

export const register = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  try {
    const [findMember] = await promisePool.query(
      `SELECT * FROM members WHERE email='${email}'`
    );

    if (Array.isArray(findMember) && findMember.length > 0) {
      return response
        .status(409)
        .json({ message: '이미 존재하는 이메일 입니다.' });
    }

    const hashPassword = createHashPassword(password);

    const [createdMember] = await promisePool.query(
      `INSERT INTO members(email, password) VALUES ('${email}', '${hashPassword}')`
    );

    return response.sendStatus(201);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
};
