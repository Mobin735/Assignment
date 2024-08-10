import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import "./src/utils/dbConnect.js";
import User from "./src/routes/User.js";
import Project from "./src/routes/Project.js";
import File from "./src/routes/File.js";
import Widget from "./src/routes/Widget.js";

const allowedOrigins = ['http://localhost:5173', 'https://podcast-mobin.vercel.app'];

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
};

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res) => res.send("Server is Live!"));
app.use("/api/user", User);
app.use("/api/project", Project);
app.use("/api/file", File);
app.use("/api/widget", Widget);

app.listen(port, () => {
    console.log("server is running");
});

