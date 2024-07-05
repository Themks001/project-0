import mongoose from "mongoose";
import UserModel from "../models/user.model.js";
import { PostModel } from "../models/post.model.js";
// create a new post

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json({ message: "post created successfully ", newPost });
  } catch (e) {
    console.log("internal server error!", e);
    res.status(500).json({ message: "internal server error!", e });
  }
};

// get a post

export const getapost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (e) {
    console.log("get a post error\n", e);
    res.status(500).json("internal server error");
  }
};
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const userId = req.body.userId;
  try {
    const post = await PostModel.findById(id);
    if (post.userId == userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "post updated", post });
    } else {
      res.status(403).json({
        message: "you are not allowed to do so"
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("internal server error");
  }
};

// delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId == userId) {
      await post.deleteOne();
      res.status(200).json("post deleted");
    } else {
      res.status(403).json({
        message: "you are not allowed to do so"
      });
    }
  } catch (e) {
    res.status(500).json("internal server error");
  }
};
export const getAll = async (req, res) => {
  const allpost = await PostModel.find();
  res.json(allpost);
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (!post.like.includes(userId)) {
      await post.updateOne({ $push: { like: userId } });
      res.json("post liked!");
    } else {
      await post.updateOne({ $pull: { like: userId } });
      res.json("post disliked!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

export const timelinePost = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId });
    const followingPost = await UserModel.aggregate([
      {
        $match: { _id: userId }
      },
      {
        $lookup: {
          from: "Post",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts"
        }
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0
        }
      }
    ]);
    res.json(currentUserPosts.concat(...followingPost));
  } catch (e) {
    res.status(500).json(e);
  }
};
