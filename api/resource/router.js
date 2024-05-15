// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model.js");

const router = express.Router();

async function checkPayload(req, res, next) {
    const payload = req.body;
    if (!payload.resource_name) {
        next({status: 400, message: "resource_name is required"});
    } else {
        let notUnique = await Resources.getByName(payload.resource_name)
        if (notUnique) {
            next({status: 400, message: "resource_name must be unique"});
        } else {
            next();
        }
    }
}

router.get("/", async (req, res, next) => {
    let allResources = await Resources.get();
    try {
        res.status(200).send(allResources)
    } catch(err) {
        next(err)
    }
})

router.post("/", checkPayload, async (req, res, next) => {
    let newResource = await Resources.insert(req.body);
    try {
        res.status(201).send(newResource)
    } catch(err) {
        next(err)
    }
})

module.exports = router;