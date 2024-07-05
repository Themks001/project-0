import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

// get a user from database

export const getAUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id, { password: 0 });
    console.log(user, id);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ message: "user doesnt exist" });
    }
  } catch (e) {
    console.log("this is error", e);
    res.json({ message: "internal server error" });
  }
};

// update a user from database
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser, currentUserAdminStatus, password } = req.body;
  if (id === currentUser || currentUserAdminStatus) {
    try {
      if (password) {
        req.body.password = await bcrypt.hash(password, 10);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true
      });

      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  } else {
    res
      .status(403)
      .json({ message: "access denied! you can't perform this action " });
  }
};
// delete a user from database
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser, currentUserAdminStatus } = req.body;
  if (id === currentUser || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      console.log("user deleted");
      res.status(200).json({ msssage: "user deleted successfully " });
    } catch (e) {
      res.status(500).json({ message: "internal server error" });
      console.log("error in deleting", e.message);
    }
  } else {
    console.log(id, currentUser);
    res
      .status(403)
      .json({ message: "access denied! you can't perform this action " });
  }
};

// follow a user
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (id === currentUserId) {
    res.status(400).json({
      message: "forbidden action"
    });
  } else {
    try {
      const us = await UserModel.findById(id);
      const wantToFollow = await UserModel.findById(currentUserId);
      if (!us.follower.includes(wantToFollow)) {
        await us.updateOne({ $push: { follower: currentUserId } });
        await wantToFollow.updateOne({ $push: { following: id } });
        res.status(200).json("user followed");
      } else {
        res.status(403).json("user already followed");
      }
    } catch (e) {
      res.status(500).json({ message: `this is error ${e}`});
    }
  }
};
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (id === currentUserId) {
    res.status(400).json({
      message: "forbidden action"
    });
  } else {
    try {
      const us = await UserModel.findById(id);
      const wantToFollow = await UserModel.findById(currentUserId);
      if (us.follower.includes(wantToFollow)) {
        await us.updateOne({ $pull: { follower: currentUserId } });
        await wantToFollow.updateOne({ $pull: { following: id } });
        res.status(200).json("user unfollowed");
      } else {
        res.status(403).json("user not followed");
      }
    } catch (e) {
      res.status(500).json({ message: `this is error ${e}`});
    }
  }
};

export const getAll = async (req, res) => {
 try {
  
  const users = await UserModel.find();
  res.json({ users });
 } catch (e) {
  console.log(e)
  res.json({message:"internal server error"})
 }
};
