import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    desc: String,
    like: [],
    image: String
  },
  { timestamps: true }
);
export const PostModel = mongoose.model("Post", postSchema);
