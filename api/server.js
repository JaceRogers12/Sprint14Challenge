// build your server here and require it from index.js
const express = require("express");
const projectRoutes = require("./project/router.js");
const resourceRoutes = require("./resource/router.js");
const taskRoutes = require("./task/router.js");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRoutes);
server.use("/api/resources", resourceRoutes);
server.use("/api/tasks", taskRoutes);

server.get("/", (req, res) => {
    res.status(200).send("Takenoko says hello")
})

server.get("*", (req, res, next) => {
    next({
        status: 404,
        message: "Ain't nothing there, friend"
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500)
        .send(err.message || "Well, well, well. It seems we have trouble.")
})

module.exports = server;