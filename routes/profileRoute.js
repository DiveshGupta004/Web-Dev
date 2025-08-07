const express = require("express");
const {registerProfile, getProfile} = require("../controllers/profileController");

const router = express.Router();

router.post("/registerProfile", registerProfile);
router.get("/", getProfile);

module.exports = router;