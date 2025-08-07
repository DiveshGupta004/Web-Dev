const Profile = require("../models/profileModels");

const getProfile = async(req, res) =>{
    const data = await Profile.find();
    return res.status(200).send({message: "All Profiles", data});
}

const registerProfile = async(req, res) =>{
    const {imageUrl, summary, skils, workExpereince, linkedinUrl, githubUrl, codingPlatform, resumeUrl} = req.body;

    if(!imageUrl || !summary || !skils || !workExpereince || !linkedinUrl || !githubUrl || !codingPlatform || !resumeUrl){
        return res.status(400).send({message: "Please fill all the fields"});
    }
    try{
        const newProfile = await Profile.create({
            imageUrl, 
            summary, 
            skils, 
            workExpereince, 
            linkedinUrl, 
            githubUrl, 
            codingPlatform, 
            resumeUrl
        });
        return res.status(201).send({message: "Profile created successfully", newProfile});
    } catch(err){
        return res.status(500).send({message: "Error in adding profile"});
    }


}
module.exports = {
  registerProfile,
  getProfile
};
