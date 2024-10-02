import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: any): Promise<any> => {
  const SALT_ROUND = parseInt(process.env.SALT_ROUND);
  const salt = await bcrypt.genSalt(SALT_ROUND);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log("generated the  hashed password!")
  return hashedPassword;
};

export const compareHashPassword = async (
  password: any,
  hashPassword: any,
): Promise<any> => {
  const result = await bcrypt.compare(password, hashPassword);
  return result;
};