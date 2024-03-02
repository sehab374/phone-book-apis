// Importing services and types
import e, { Request, Response, NextFunction } from "express";
import AuthService, { prisma } from "../services/auth.services";
import { hashSync, compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.signup(req.body);
    res.json(user);
  } catch (error: any) {
    if (error.message === "User already exists") {
      return res.status(409).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // res.send("login works sucessfully");
  const { email, password } = req.body;

  try {
    const { user, token } = await AuthService.login(email, password);
    res.json({ user, token });
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const all = async (req: Request, res: Response) => {
  try {
    const allUsers = await AuthService.all();
    res.json({ allUsers });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
