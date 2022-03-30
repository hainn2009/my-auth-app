import { hash, compare } from "bcryptjs";

export const hashPassword = async (password) => await hash(password, 12);
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
