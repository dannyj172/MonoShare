import { Request } from "express";
import { User, Session } from "@prisma/client";

export interface AuthenticatedRequest extends Request {
  user: User;
  session: Session;
}

// Use when trying to access something requiring you to be logged in already
