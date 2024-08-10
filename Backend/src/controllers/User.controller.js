import User from "../models/User.model.js";
import { CreateJWT } from "../utils/JwtToken.js";

export const getUserData = async (req, res) => {
    const { email } = req.data.user;
    try {
        const result = await User.findOne({ email }).populate('projects');
        const userData = {
            projects: result.projects.map(project => ({
                projectID: project._id,
                projectname: project.projectname,
                projectEdit: project.lastedit,
                files: project.files.length
            }))
        };    
        res.status(200).json({ msg: "Success", userData });
    } catch (error) {
        res.status(500).json({ msg: "user_data: error" });
    }
}

export const createUser = async (req, res) => {
    const { email } = req.body;
    const data = {
        email: email
    }
    const token = CreateJWT(data);
    try {
        let isUserExist = await User.findOne({ email }).populate('projects');
        
        if (isUserExist == null) {
            const newUser = new User({ email: email });
            await newUser.save();
            const newUserData = {
                email: email,
                username: "",
                projects: []
            }
            res.status(200).json({ msg: "Logged In", userData: newUserData, token });
        }
        else {
            const existUserData = {
                email: isUserExist.email,
                username: isUserExist.username,
                projects: isUserExist.projects.map(project => ({
                    projectID: project._id,
                    projectname: project.projectname,
                    files: project.files.length
                }))
            }
            res.status(200).json({ msg: "Logged In", userData: existUserData, token });
        }
    } catch (error) {
        res.status(500).json({ msg: "user_login: error" });
    }
}

