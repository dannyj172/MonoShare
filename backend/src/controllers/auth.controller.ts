import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { prisma } from "../../prisma/prisma-client";
import { AuthDto } from "../interfaces/auth.dto";
import {
  HTTP_BAD_REQUEST,
  HTTP_CONFLICT,
  HTTP_SUCCESS,
} from "../constants/http_status";
import { AuthService } from "../services/auth.service";

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as AuthDto;

  if (!email || !password) {
    res
      .status(HTTP_BAD_REQUEST)
      .json({ message: "Email and password are required" });
  }

  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (userExists) {
    res.status(HTTP_CONFLICT).send({ message: "User already registered!" });
  }

  const passwordHash = await AuthService.hashPassword(password); //put the hashing in a user.service.ts
  const user = await prisma.user.create({
    data: { email, passwordHash },
  });
  const token = AuthService.generateSessionToken();
  const tokenHash = AuthService.hashSessionToken(token);
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt: new Date(Date.now() + 7 * 86400000), //7 days
    },
  });

  // todo: set cookie

  res.status(HTTP_SUCCESS).json({
    message: "User registered successfully",
    user: { id: user.id, email: user.email },
  });
});

// export const signInUser = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
//   console.log("Signing in attempt");

//   let { email, password } = req.body as UserDto;
//   const user = await prisma.user.findUnique({ where: { email: email } });

//   if (user) {
//     const verified = await argon2.verify(user.passwordHash, password);
//     if (verified) {
//       res.send({
//         message: "Sign in successful",
//         user: { email: user.email, token: "session token cookie" },
//       });
//     }
//   } else
//     res.status(201).send({ message: "User with that email does not exist" });
// });
