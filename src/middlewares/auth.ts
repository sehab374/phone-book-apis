import { Request, Response, NextFunction } from "express";
import * as jwt from "../utils/jwt"; // Ensure jwt has proper TypeScript definitions
import createError from "http-errors";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return next(createError.Unauthorized("Access token is required"));
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return next(createError.Unauthorized());
  }

  try {
    const user = await jwt.verifyAccessToken(token);
    (req as any).user = user; // Casting req to any to assign user property
    next();
  } catch (e: unknown) {
      // Perform type checking or type assertion
      if (e instanceof Error) {
        next(createError(500, e.message));
      } else {
        next(createError(500, "Unknown error occurred"));
      }
    }
};

export default auth;
