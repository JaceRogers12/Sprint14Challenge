/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('projects').insert([
    {project_name: "charmander", project_description: "the salamander pokemon"},
    {project_name: "squirtle", project_description: "the turtle pokemon"},
    {project_name: "bulbasaur", project_description: "the bulb pokemon"}
  ]);
};
