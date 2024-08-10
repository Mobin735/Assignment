import express from "express";
import { createFile, deleteFile, getFile, updateFile } from "../controllers/File.controller.js";

const File = express.Router();

File.route("/createfile").post(createFile);
File.route("/updatefile").post(updateFile);
File.route("/deletefile").post(deleteFile);
File.route("/:fileID").get(getFile);

export default File;