import { hash } from "bcryptjs";

export const hashPassword = (password) => hash(password, 12);
