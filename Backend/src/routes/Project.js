import express from "express";
import { createProject, getFiles, getProfile, updateProfile } from "../controllers/Project.controller.js";
import { VerifyJWT } from "../utils/JwtToken.js";

const Project = express.Router();

Project.route("/:projectID").get(VerifyJWT,getFiles);
Project.route("/:projectID/profile").get(VerifyJWT, getProfile);
Project.route("/:projectID/profile/updateusername").post(VerifyJWT, updateProfile);
Project.route("/create").post(VerifyJWT,createProject);

export default Project;