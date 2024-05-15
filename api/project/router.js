// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model.js");

const router = express.Router();

function checkPayload(req, res, next) {
    let payload = req.body;
    if (!payload.project_name) {
        next({status: 400, message: "project_name is required"})
    } else {
        next()
    }
}

router.get("/", async (req, res, next) => {
    let allProjects = await Projects.get();
    try {
        res.status(200).send(allProjects)
    } catch(err) {
        next(err)
    }
})

router.post("/", checkPayload, async (req, res, next) => {
    let newProject = await Projects.insert(req.body);
    try {
        res.status(201).send(newProject)
    } catch(err) {
        next(err)
    }
})

module.exports = router;