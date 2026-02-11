import { ComputedStatus } from "../dtos/secret.dto";

export const computeSecretStatus = (secret: {
  viewedAt: Date | null;
  expiresAt: Date;
}): ComputedStatus => {
  const now = new Date();

  if (secret.expiresAt <= now) return "EXPIRED";
  if (secret.viewedAt) return "VIEWED";
  return "ACTIVE";
};
