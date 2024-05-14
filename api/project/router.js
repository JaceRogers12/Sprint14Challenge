// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
    let allProjects = await Projects.get();
    try {
        res.status(200).send(allProjects)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let newProject = await Projects.insert(req.body);
    try {
        res.status(201).send(newProject)
    } catch(err) {
        next(err)
    }
})

module.exports = router;