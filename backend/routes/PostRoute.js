
import express from "express";
const router = express.Router();
import { createPost, getAll, likePost, getapost, updatePost, timelinePost, deletePost} from "../controller/postcontroller.js"
router.post("/", createPost);
router.get("/all", getAll);
router.get("/:id", getapost);
router.get("/:id/timeline", timelinePost);
router.put("/:id", updatePost);
router.put("/:id/like", likePost);
router.delete("/:id", deletePost)
export default router;
