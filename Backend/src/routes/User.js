import express from "express";
import { createUser, getUserData } from "../controllers/User.controller.js";
import { VerifyJWT } from "../utils/JwtToken.js";

const User = express.Router();

User.route("/").get(VerifyJWT,getUserData);
User.route("/login").post(createUser);

export default User;