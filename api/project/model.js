// build your `Project` model here
const db = require("../../data/dbConfig.js");

async function get() {
    const result = await db("projects")
    return "get projects connected"
}

async function insert(payload) {
    const result = await db("projects")
    return "insert projects connected"
}

module.exports = {
    get,
    insert
}