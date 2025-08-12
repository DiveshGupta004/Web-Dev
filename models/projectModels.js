const mongoose = require("mongoose");

const {Schema} = mongoose;

const ProjectSchema = new Schema({
    userId : { type: Schema.Types.ObjectId, required: true},
    owner: { type : String, required: true},
    title: { type: String, required: true, notNull: true},
    description: { type: String, required: true},
    technologies: { type: [String], required: true},
    requirements: { type: [String], required: true},
    isOpen: { type : Boolean, default: true},
},
{timestamps: true});

module.exports = mongoose.model("Project", ProjectSchema);