import express from "express";
import { register, login } from "../controller/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/register", (req, res)=>{
 res.send('hsejeje')
});
export default router;
