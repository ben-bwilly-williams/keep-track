/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('trails', (table) => {
    table.increments('id')
    table.string('gradeIcon')
    table.string('trailName')
    table.string('location')
    table.string('description')
    table.string('notes')
    table.date('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('trails')
}
