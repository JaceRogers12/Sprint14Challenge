// build your `Task` model here
const db = require("../../data/dbConfig.js");

async function get() {
    const result = await db("tasks")
    return "get tasks connected"
}

async function insert(payload) {
    const result = await db("tasks")
    return "insert tasks connected"
}

module.exports = {
    get,
    insert
}