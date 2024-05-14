/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("projects", tbl => {
    tbl.increments("project_id")
    tbl.string("project_name", 100)
        .notNullable()
    tbl.string("project_description", 5000)
    tbl.boolean("project_completed")
        .defaultTo(0)
  })
  .createTable("resources", tbl => {
    tbl.increments("resource_id")
    tbl.string("resource_name", 100)
        .notNullable()
        .unique()
    tbl.string("resource_description", 5000)
  })
  .createTable("tasks", tbl => {
    tbl.increments("task_id")
    tbl.string("task_description", 100)
        .notNullable()
    tbl.string("task_notes", 5000)
    tbl.boolean("task_completed")
        .defaultTo(0)
    tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
  })
  .createTable("project_resources", tbl => {
    tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
    tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTableIfExists("resource_assignment")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
