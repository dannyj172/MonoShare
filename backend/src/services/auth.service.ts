import argon2 from "argon2";
import crypto from "crypto";

export const AuthService = {
  async hashPassword(password: string) {
    const passwordHash = await argon2.hash(password);
    return passwordHash;
  },

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return argon2.verify(hash, password);
  },

  generateSessionToken(): string {
    const sessionToken = crypto.randomBytes(32).toString("hex");
    return sessionToken;
  },

  hashSessionToken(token: string): string {
    const hashedSessionToken = crypto
      .createHmac("sha256", process.env.SESSION_SECRET!)
      .update(token)
      .digest("hex");
    return hashedSessionToken;
  },
};
