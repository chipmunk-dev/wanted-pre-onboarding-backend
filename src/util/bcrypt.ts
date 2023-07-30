import bcrypt from 'bcrypt';

export const createHashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

export const comparePassword = (password: string, hashPassword: string) => {
  const isMatch = bcrypt.compareSync(password, hashPassword);

  return isMatch;
};
