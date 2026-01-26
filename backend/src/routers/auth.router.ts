import express from "express";
import {
  checkUser,
  createUser,
  logoutUser,
  signinUser,
} from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", createUser);
router.post("/signin", signinUser);
router.post("/logout", requireAuth, logoutUser);
router.get("/user-check", requireAuth, checkUser);

export { router as authRouter };
