// build your `Project` model here
const db = require("../../data/dbConfig.js");

async function get() {
    let result = await db("projects")
    result.forEach(record => {
        if (!record.project_completed) {
            record.project_completed = false;
        } else {
            record.project_completed = true;
        }
    })
    return result
}

async function insert(payload) {
    const [id] = await db("projects")
        .insert(payload)
    let result = await db("projects")
        .where("project_id", id)
        .first()
    if (!result.project_completed) {
            result.project_completed = false;
    } else {
            result.project_completed = true;
    }
    return result
}

module.exports = {
    get,
    insert
}