const cleaner = require("knex-cleaner");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: "truncate",
    ignoreTables: ["knex-migrations", "knex-migrations-lock"]
  })
  
};
