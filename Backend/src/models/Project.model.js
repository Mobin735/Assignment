import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true
    },
    lastedit: {
        type: Date,
        default: Date.now
    },
    configuration: {
        type: Object,
        default: {
            chatbot_name: "",
            welcome_message: "",
            input_holder: "",
            primary_color: "",
            font_color: "",
            font_size: "",
            chat_height: "",
            show_sources: false,
            chat_icon_size: "",
            position_screen: "",
            distance_bottom: "",
            horizontal_distance: "",
            chatbot_image: "",
        }
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Files',
        default: []
    }]
});

const Project = mongoose.model('Projects', projectSchema);

export default Project;
