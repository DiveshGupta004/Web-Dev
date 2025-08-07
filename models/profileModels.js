const mongoose = require("mongoose");

const {Schema} = mongoose;

const ProfileSchema = new Schema({
    imageUrl : {type: String, required: true},
    summary : {type: String, required: true},
    skils : {type: [String], required: true},
    workExpereince: {type: String, required: true},
    linkedinUrl : {type: String, required: true},
    githubUrl : {type: String, required: true},
    codingPlatform : {type: [String], required: true},
    resumeUrl : {type: String, required: true},
},
{timestamps : true})

module.exports = mongoose.model("Profile", ProfileSchema);