import { Router } from "express";
import { getSecrets } from "../controllers/secret.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.get("/", requireAuth, getSecrets);

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

export { router as secretsRoute };
