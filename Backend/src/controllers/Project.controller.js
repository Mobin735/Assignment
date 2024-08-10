import Project from "../models/Project.model.js";
import User from "../models/User.model.js";

export const getFiles = async (req, res) => {
    const projectID = req.params.projectID;

    try {
        const result = await Project.findOne({ _id: projectID }).populate("files");
        const filesData = {
            projectName: result.projectname,
            files: result.files.map(file => ({
                fileID: file._id,
                fileName: file.filename,
                uploadDate: file.uploaddate
            }))
        }
        res.status(200).json({ msg: "Success", filesData });
    } catch (error) {
        res.status(500).json({ msg: "project_fetch: error" });
    }

}

export const createProject = async (req, res) => {
    const { email } = req.data.user
    const { projectName } = req.body;

    try {
        const newProject = new Project({ projectname: projectName });
        const project = await newProject.save();

        const result = await User.findOneAndUpdate(
            { email: email },
            { $push: { projects: project._id } },
            { new: true }
        ).populate('projects');

        const userData = {
            email: result.email,
            username: result.username,
            projects: result.projects.map(project => ({
                projectID: project._id,
                projectname: project.projectname,
                files: project.files.length
            }))
        };

        res.status(200).json({ msg: "Success", updatedUser: userData });
    } catch (error) {
        res.status(500), json({ msg: "Project_create: error" });
    }
}

export const getProfile = async (req, res) => {
    const { projectID } = req.params;
    const { email } = req.data.user

    try {
        const result = await User.findOne({ email });
        const projectResult = await Project.findOne({ _id: projectID });

        const userData = {
            projectName: projectResult.projectname,
            userName: result.username,
            userEmail: result.email
        }
        res.status(200).json({ msg: "Success", userData });
    } catch (error) {
        res.status(500).json({ msg: "profile_fetch: error"});
    }
}

export const updateProfile = async (req, res) => {
    const { email } = req.data.user
    const { userName } = req.body
    
    try {
        await User.updateOne({ email }, {
            username: userName
        })
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "profile_update: error" });   
    }   
}