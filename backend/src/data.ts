import { Secret, SecretStatus } from "@prisma/client";

export const sample_secrets: Secret[] = [
  // ACTIVE secrets
  {
    id: "650f1a000000000000000001",
    text: "Water the office plants",
    status: SecretStatus.ACTIVE,
    receiver: null,
    expiresAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    viewedAt: null,
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "650f1a000000000000000002",
    text: "Pick up groceries for the weekend",
    status: SecretStatus.ACTIVE,
    receiver: "alice@example.com",
    expiresAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    viewedAt: null,
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // VIEWED secrets
  {
    id: "650f1a000000000000000003",
    text: "Prepare presentation slides",
    status: SecretStatus.VIEWED,
    receiver: null,
    expiresAt: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    viewedAt: new Date(), // already viewed
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "650f1a000000000000000004",
    text: "Send report to manager",
    status: SecretStatus.VIEWED,
    receiver: "bob@example.com",
    expiresAt: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    viewedAt: new Date(),
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // EXPIRED secrets
  {
    id: "650f1a000000000000000005",
    text: "Old meeting notes",
    status: SecretStatus.EXPIRED,
    receiver: null,
    expiresAt: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    viewedAt: null,
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
    updatedAt: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
  },
  {
    id: "650f1a000000000000000006",
    text: "Expired project plan",
    status: SecretStatus.EXPIRED,
    receiver: "charlie@example.com",
    expiresAt: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    viewedAt: null,
    creatorId: "650f1b000000000000000011",
    createdAt: new Date(new Date().getTime() - 12 * 24 * 60 * 60 * 1000), // 12 days ago
    updatedAt: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
  },
];
