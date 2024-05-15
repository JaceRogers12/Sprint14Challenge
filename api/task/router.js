// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model.js");

const router = express.Router();

async function checkPayload(req, res, next) {
    const payload = req.body;
    if (!payload.task_description || !payload.project_id)  {
        next({status: 400, message: "task_description and project_id are required"})
    } else {
        let valid = await Tasks.getById(payload.project_id)
    if (!valid) {
        next({status: 400, message: "project_id is not valid"})
    } else {
        next()
    }}
}

router.get("/", async (req, res, next) => {
    let allTasks = await Tasks.get();
    try {
        res.status(200).send(allTasks)
    } catch(err) {
        next(err)
    }
})

router.post("/", checkPayload, async (req, res, next) => {
    let newTask = await Tasks.insert(req.body);
    try {
        res.status(201).send(newTask)
    } catch(err) {
        next(err)
    }
    
})

module.exports = router;