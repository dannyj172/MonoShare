import { Router } from "express";
import asyncHandler from "express-async-handler";

import { sample_secrets } from "../data";
import { getSecrets } from "../controller/secretCntrl";

import { HTTP_BAD_REQUEST } from "../constants/http_status";

const router = Router();

// router.get(
//   "/seed",
//   asyncHandler(async (req, res) => {
//     const postsCount = await PostModel.countDocuments();
//     if (postsCount > 0) {
//       res.send("Seed is already done!");
//       return;
//     }

//     await PostModel.create(sample_posts);
//     res.send("Seed Is Done!");
//   })
// );

router.get("/", getSecrets);

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const id = req.params.id;

//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       res.status(HTTP_BAD_REQUEST).send("This post does not exist.");
//     }

//     const post = await PostModel.findById(req.params.id);
//     if (!post) {
//       res.status(HTTP_BAD_REQUEST).send("This post does not exist.");
//     }
//     res.send(post);
//   })
// );

// router.post(
//   "/create",
//   auth,
//   asyncHandler(async (req, res) => {
//     if (!req.body) {
//       res.status(HTTP_BAD_REQUEST).send("Invalid create post request!");
//     }
//     const post = await PostModel.create(req.body);

//     res.send(post);
//   })
// );

export default router;
