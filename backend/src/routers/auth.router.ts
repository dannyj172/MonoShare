import express from "express";
import {
  createUser,
  logoutUser,
  signinUser,
} from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", createUser);
router.post("/signin", signinUser);
router.post("/logout", requireAuth, logoutUser);

export { router as authRouter };
