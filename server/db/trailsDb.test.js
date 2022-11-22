const { getTrails, addTrail, deleteTrail } = require('../db/trailsDb')

const knex = require('knex')
const config = require('../db/knexfile').test
const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getTrails', () => {
  test('gets all trails from db', () => {
    return getTrails(testDb).then((trails) => {
      expect(trails).toHaveLength(3)
    })
  })
  test(`show trail name`, () => {
    return getTrails(testDb).then((trails) => {
      expect(trails[0].trailName).toBe('Rude Rock')
    })
  })
  test(`show another trail name`, () => {
    return getTrails(testDb).then((trails) => {
      expect(trails[2].trailName).toBe('Squid Run')
    })
  })
  test(`gets grade image name`, () => {
    return getTrails(testDb).then((trails) => {
      expect(trails[0].gradeIcon).toBe('grade-4.png')
    })
  })
})

// describe('addTrail', () => {
//   test('gets all trails from db', () => {
//     const newTrail = {
//       gradeIcon: 'grade-5.png',
//       trailName: 'Moustache Express',
//     }
//     return addTrail(newTrail).then(() => {
//       return getTrails(testDb).then((trails) => {
//         expect(trails).toHaveLength(5)
//       })
//     })
//   })
// })
