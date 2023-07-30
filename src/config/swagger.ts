import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Todo List API Document',
      version: '0.0.1',
      description: '원티드 프리온보딩 인턴쉽 과제 API 문서',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Chipmunk',
        url: 'https://velog.io/@wldns12378',
        email: 'devquokkajeong@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
  },
  apis: [
    __dirname + '/../routes/document.js',
    __dirname + '/../routes/document.ts',
  ],
};

export const specs = swaggerJsdoc(options);
