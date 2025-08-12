const Project = require("../models/projectModels");

const getProject = async (req, res) => {
    const data = await Project.find({});
    return res.status(200).json({
        message: "All Projects",
        data
    });

}
const createProject = async (req, res) => {
    const { owner, title, description, technologies, requirements } = req.body;
    if (!owner || !title || !description || !technologies || !requirements) {
        return res.status(400).json({ message: "Please Add all mandatory fields" });
    }
    const newProject = await Project.create({
        userId: req.user[0]._id,
        owner,
        title,
        description,
        technologies,
        requirements
    });

    const data = await newProject.save();
    return res.status(201).json({
        message: "Project Created",
        data
    });
}

module.exports = {getProject, createProject};