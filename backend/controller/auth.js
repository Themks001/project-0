import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;

    const userExist = await UserModel.findOne({ username });
    if (userExist) {
      return res.json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
      firstname,
      lastname
    });
    await newUser.save();
    res.json({ newUser });
  } catch (e) {
    console.log("registeration error \n", e);
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  const userLogedIn = await UserModel.findOne({ username });
  if (!userLogedIn) {
    res.json({ message: "user doesn't exist" });
  }
  const matchedPassword = await bcrypt.compare(password, userLogedIn.password);

  if (!matchedPassword) {
    res.status(400).json({ message: "password incorrect" });
  }
  res.status(200).json(userLogedIn);
};
