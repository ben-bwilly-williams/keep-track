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
    table.text('description')
    table.text('notes')
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
