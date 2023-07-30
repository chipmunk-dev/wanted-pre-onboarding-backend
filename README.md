# wanted-pre-onboarding-backend

원티드 프리온보딩 백엔드 인턴십 - 선발 과제

## 지원자의 성명

정지운

## 애플리케이션의 실행 방법 (엔드포인트 호출 방법 포함)

#### 실행 명령어

**서버 실행전 준비사항**

1. MySQL 설치 (`todolist` 데이터베이스 생성)
2. node version 18 설치
3. Table 생성 (아래 er-diagram 을 참고하여 생성)
4. 아래의 명령어 입력하기 전에 `.env` 파일을 생성후 아래를 참고하여 작성해주세요.

```env
# Database
DB_HOST=데이터 베이스 호스트
DB_USER=데이터 베이스 계정
DB_SECRET=데이터 베이스 비밀번호
DB_DATABASE=데이터베이스 이름

# Auth
JWT_SECRET=토큰 시크릿 키(임의 스트링 문자열 입력)
JWT_EXPIRE=토큰 유효기간(원하는 시간 입력)
```

_해당 파일에 작성해야하는 변수는 `.env.example`에 적혀있습니다._

```bash
$ npm install
$ npm run start
```

#### 엔드포인트 호출 방법

1. 서버를 실핸한다.
2. `http://localhost:8080/api-docs/`를 url에 입력하여 문서를 확인한다.

API Document: `http://localhost:8080/api-docs/`

## 데이터베이스 테이블 구조

<img src="./src/document/todolist_erd.jpg" />

## 구현한 API의 동작을 촬영한 데모 영상 링크

#### 회원가입

#### 로그인

#### Todo (CURD)

## 구현 방법 및 이유에 대한 간략한 설명

## API 명세(request/response 포함)
