import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filedescription: {
        type: String,
        required: true
    },
    uploaddate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Done"
    }
});

const File = mongoose.model('Files', fileSchema);

export default File;
