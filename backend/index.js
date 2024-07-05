import { connectToDataBase } from "./database/connect.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import AuthRoute from "./routes/authRoute.js";
import UserRoute from "./routes/userRoute.js";
import PostRoute from "./routes/PostRoute.js"
const app = express();
app.use(express.json());
connectToDataBase();
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
