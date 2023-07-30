/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         memberId:
 *           type: number
 *           description: Member 아이디
 *         email:
 *           type: string
 *           description: 이메일(로그인 아이디)
 *         password:
 *           type: string
 *           description: 비밀번호(암호화)
 *         createdAt:
 *           type: string
 *           format: date
 *           description: 회원가입 일자
 *         modifiedAt:
 *           type: string
 *           format: date
 *           description: 회원정보 수정 일자
 *       example:
 *         memberId: 1
 *         email: todo@gmail.com
 *         password: AASNDJKL@!$*CAN@#EBNDASDASLKJDA
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         modifiedAt: 2022-05-01T12:23:55.157Z
 *     Todo:
 *       type: object
 *       required:
 *         - contents
 *       properties:
 *         todoId:
 *           type: number
 *           description: Todo 아이디
 *         memberId:
 *           type: number
 *           description: Member 아이디
 *         contents:
 *           type: string
 *           description: 본문
 *         createdAt:
 *           type: string
 *           format: date
 *           description: 회원가입 일자
 *         modifiedAt:
 *           type: string
 *           format: date
 *           description: 회원정보 수정 일자
 *       example:
 *         todoId: 1
 *         memberId: 4
 *         contents: 코인세탁 돌리기
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         modifiedAt: 2022-05-01T12:23:55.157Z
 *
 * tags:
 *   name: Member
 *   description: 회원 API
 * /members/login:
 *   post:
 *     summary: 로그인 API
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *               required:
 *                 - email
 *                 - password
 *     responses:
 *       '200':
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 member:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                     memberId:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                     modifiedAt:
 *                       type: string
 *                       format: date
 *                 accessToken:
 *                   type: string
 *       '400':
 *         description: 이메일 또는 패스워드 불일치 or 유효성 검사 실패
 *       '500':
 *         description: 서버 에러
 * /members/register:
 *   post:
 *     summary: 회원가입 API
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *               required:
 *                 - email
 *                 - password
 *     responses:
 *       '201':
 *         description: 회원가입 성공
 *       '400':
 *         description: 유효성 검사 실패
 *       '409':
 *         description: 이미 존재하는 유저
 *       '500':
 *         description: 서버 에러
 */
/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: 투두 API
 * /todos:
 *   post:
 *     summary: 투두 생성 API
 *     tags: [Todo]
 *     parameters:
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 contents:
 *                   type: string
 *               required:
 *                 - contents
 *     responses:
 *       '201':
 *         description: 생성 성공
 *       '400':
 *         description: 유효성 검증 실패
 *       '401':
 *         description: 토큰 검증 실패
 *       '500':
 *         description: 서버 에러
 */
/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: 투두 API
 * /todos:
 *   get:
 *     summary: 투두 리스트 가져오기
 *     tags: [Todo]
 *     responses:
 *       '200':
 *         description: todo List 조회 성공
 *         content:
 *         application/json:
 *           schema:
 *               type: array
 *               item:
 *                 type: object
 *                 properties:
 *                   todoId:
 *                     type: number
 *                   memberId:
 *                     type: number
 *                   contents:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date
 *                   modifiedAt:
 *                     type: string
 *                     format: date
 *       '500':
 *         description: 서버 에러
 */

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: 투두 API
 * /todos/:id:
 *   get:
 *     summary: 단일 투두 가져오기
 *     tags: [Todo]
 *     parameters:
 *       - in: params
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       '200':
 *         description: 단일 todo 조회 성공
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todoId:
 *                 type: number
 *               memberId:
 *                 type: number
 *               contents:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date
 *               modifiedAt:
 *                 type: string
 *                 format: date
 *       '400':
 *         description: 존재하지 않는 todo
 *       '500':
 *         description: 서버 에러
 */

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: 투두 API
 * /todos/:id:
 *   put:
 *     summary: 투두 수정하기
 *     tags: [Todo]
 *     parameters:
 *       - in: params
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: todo 수정 성공
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todoId:
 *                 type: number
 *               memberId:
 *                 type: number
 *               contents:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date
 *               modifiedAt:
 *                 type: string
 *                 format: date
 *       '400':
 *         description: 존재하지 않는 todo or 본인이 작성한 todo가 아닐경우
 *       '500':
 *         description: 서버 에러
 */

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: 투두 API
 * /todos/:id:
 *   delete:
 *     summary: 투두 삭제하기
 *     tags: [Todo]
 *     parameters:
 *       - in: params
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '204':
 *         description: todo 삭제 성공
 *       '400':
 *         description: 존재하지 않는 todo or 본인이 작성한 todo가 아닐경우
 *       '500':
 *         description: 서버 에러
 */
