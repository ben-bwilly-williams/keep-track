/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('trails').del()
  await knex('trails').insert([
    { id: 1, colName: '' },
    { id: 2, colName: '' },
    { id: 3, colName: '' },
  ])
}
