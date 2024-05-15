/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('resources').insert([
    {resource_name: "fire", resource_description: "the hot stuff"},
    {resource_name: "grass", resource_description: "the growing stuff"},
    {resource_name: "water", resource_description: "the wet stuff"}
  ]);
};
