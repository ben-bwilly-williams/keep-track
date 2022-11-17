/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('trails').del()
  await knex('trails').insert([
    {
      id: 1,
      gradeIcon: 'grade-4.png',
      trailName: 'Rude Rock',
      location: 'Coronet Peak, Queenstown',
      description: 'Insert brief trail description.',
      notes: 'Insert brief trail notes, bike notes etc.',
      date: '04/04/22',
    },
  ])
}
