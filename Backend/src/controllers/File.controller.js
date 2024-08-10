import File from "../models/File.model.js";
import Project from "../models/Project.model.js";

export const getFile = async (req, res) => {
    const { fileID } = req.params;
    try {
        const result = await File.findOne({ _id: fileID });
        const fileData = {
            fileID: result._id,
            fileName: result.filename,
            fileDesc: result.filedescription
        }
        res.status(200).json({ msg: "Success", fileData });
    } catch (error) {
        res.status(500).json({ msg: "file_fetch: error" });
    }
}

export const updateFile = async (req, res) => {
    const { projectID, fileID, fileName, fileDesc } = req.body;
    try {
        await File.findOneAndUpdate(
            { _id: fileID },
            {
                filename: fileName,
                filedescription: fileDesc
            }
        )
        await Project.updateOne({ _id: projectID},
            {
                lastedit: Date.now()
            }
        )
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "file_update: error" });
    }
}

export const deleteFile = async (req, res) => {
    const { fileID, projectID } = req.body;

    try {
        await File.deleteOne({ _id: fileID });
        await Project.updateOne(
            { _id: projectID },
            { 
                lastedit: Date.now(),
                $pull: { files: fileID } 
            }
        )
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "file_delete: error" });
    }
}

export const createFile = async (req, res) => {
    const { projectID, fileName, fileDesc } = req.body;
    try {
        const newFile = new File({ filename: fileName, filedescription: fileDesc });
        const file = await newFile.save();

        const result = await Project.findOneAndUpdate(
            { _id: projectID },
            { 
                lastedit: Date.now(),
                $push: { files: file._id } 
            },
            { new: true }
        ).populate('files');

        const filesData = {
            projectName: result.projectname,
            files: result.files.map(file => ({
                fileID: file._id,
                fileName: file.filename,
                uploadDate: file.uploaddate
            }))
        };
        res.status(200).json({ msg: "Success", filesData });
    } catch (error) {
        res.status(500).json({ msg: "file_create: error" });
    }
}