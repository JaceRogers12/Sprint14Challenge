/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('tasks').insert([
    {task_description: "absorb", task_notes: "also heals", project_id: 3},
    {task_description: "water gun", task_notes: "cute", project_id: 2},
    {task_description: "ember", task_notes: "might burn", project_id: 1}
  ]);
};
