// build your `Task` model here
const db = require("../../data/dbConfig.js");

async function get() {
    const result = await db("tasks as t")
        .join("projects as p", "t.project_id", "p.project_id")
        .select("task_id", "task_description", "task_notes", "task_completed", "project_name", "project_description")
        result.forEach(record => {
            let completed = record.task_completed;
            if (!completed) {
                record.task_completed = false
            } else {
                record.task_completed = true
            }
        })
    return result
}

async function insert(payload) {
    const [id] = await db("tasks")
        .insert(payload)
    let result = await db("tasks")
        .where("task_id", id)
        .first()
    if (!result.task_completed) {
        result.task_completed = false;
    } else {
        result.task_completed = true;
    }
    return result
}

async function getById(id) {
    const selectedTask = await db("projects")
        .where({project_id: id})
        .first()
    return selectedTask
}

module.exports = {
    get,
    insert,
    getById
}