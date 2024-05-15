// build your `Resource` model here
const db = require("../../data/dbConfig.js");

async function get() {
    const result = await db("resources")
    return result
}

async function insert(payload) {
    const [id] = await db("resources")
        .insert(payload)
    const result = await db("resources")
        .where("resource_id", id)
        .first()
    return result
}

async function getByName(name) {
    let selectedName = await db("resources")
        .where({resource_name: name})
        .first()
    return selectedName
}

module.exports = {
    get,
    insert,
    getByName
}