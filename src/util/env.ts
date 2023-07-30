import 'dotenv/config';

const required = (key: string) => {
  return process.env[key];
};

export default {
  db: {
    host: required('DB_HOST'),
    user: required('DB_USER'),
    secret: required('DB_SECRET'),
    database: required('DB_DATABASE'),
  },
  jwt: {
    secret: required('JWT_SECRET'),
    expire: required('JWT_EXPIRE'),
  },
};
