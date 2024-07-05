import express from "express";
import {
  getAUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
  getAll
} from "../controller/userController.js";
const router = express.Router();
router.get("/all", getAll);
router.get("/:id", getAUser);
router.put("/:id", updateUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);
router.delete("/:id", deleteUser);
export default router;
