// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
    let allTasks = await Tasks.get();
    try {
        res.status(200).send(allTasks)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let newTask = await Tasks.insert(req.body);
    try {
        res.status(201).send(newTask)
    } catch(err) {
        next(err)
    }
})

module.exports = router;