import bcrypt from 'bcryptjs';

export const hashPassword = async (password: any): Promise<any> => {
  const salt = bcrypt.genSalt(process.env.SALT_ROUND);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('hashed password successfully!');
  return hashPassword;
};

export const compareHashPassword = async (password: any, hashPassword: any): Promise <any> => {
  const result = await bcrypt.compare(password, hashPassword);
  return result;
  
};
