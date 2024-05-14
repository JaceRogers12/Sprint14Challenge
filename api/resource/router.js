// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
    let allResources = await Resources.get();
    try {
        res.status(200).send(allResources)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let newResource = await Resources.insert(req.body);
    try {
        res.status(201).send(newResource)
    } catch(err) {
        next(err)
    }
})

module.exports = router;