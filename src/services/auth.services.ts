import { PrismaClient, User } from "@prisma/client";
import bcrypt, { hashSync } from "bcryptjs";
import dotenv from "dotenv";
import createError from "http-errors";
import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

dotenv.config();

export const prisma = new PrismaClient({
  log: ['query']
});

interface LoginResponse {
  user: User; // Adjust the type according to your user model
  token: string;
}

interface SignupData {
  fullName: string;
  password: string;
  email: string;
  number: string; // Adjust the type based on your requirements
}

interface SignupResponse {
  id: number; // Adjust according to your user model
  email: string;
  fullName: string;
  number: string; // Adjust as needed
}

export class AuthService {
  static async login(email: string, password: string): Promise<LoginResponse> {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw createError(404, "User not found");
    }

    if (!compareSync(password, user.password)) {
      throw createError(401, "Incorrect password");
    }

    const token = jwt.sign({
      userId: user.id,
    }, process.env.JWT_SECRET_KEY!); // Ensure your JWT_SECRET_KEY is safely handled

    return { user, token };
  }

  static async signup({ fullName, password, email, number }: SignupData): Promise<SignupResponse> {
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      throw createError(401, "User already exists");
    }

    const hashedPassword = hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        fullName,
        password: hashedPassword,
        email,
        number,
      },
    });

    return user;
  }

  static async all(){
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}

export default AuthService;

