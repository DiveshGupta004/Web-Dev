const express = require("express");
const {getProject, createProject} = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getProject);
router.post("/create", authMiddleware, createProject);

module.exports = router;