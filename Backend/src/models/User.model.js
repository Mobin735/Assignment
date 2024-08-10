import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: ''
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        default: []
    }]
});

const User = mongoose.model('Users', userSchema);

export default User;
