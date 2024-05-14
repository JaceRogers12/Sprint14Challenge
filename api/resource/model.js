// build your `Resource` model here
const db = require("../../data/dbConfig.js");

async function get() {
    const result = await db("resources")
    return "get resources connected"
}

async function insert(payload) {
    const result = await db("resources")
    return "insert resources connected"
}

module.exports = {
    get,
    insert
}