import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    profilePicture: String,
    covarPicture: String,
    livein: String,
    about: String,
    workAt: String,
    relationship: String,
    follower: [],
    following: []
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("Users", userSchema);
export default userModel;

