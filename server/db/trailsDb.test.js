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

describe('addTrail', () => {
  it('adds new trail to db', () => {
    const newTrail = { trailName: 'Tombstone' }
    return addTrail(newTrail, testDb)
      .then(() => {
        return getTrails(testDb)
      })
      .then((trails) => {
        expect(trails).toHaveLength(4)
        expect(trails[3].trailName).toBe('Tombstone')
      })
  })
})

describe('deleteTrail', () => {
  it('deletes trail from db', () => {
    const id = 2
    return deleteTrail(id, testDb)
      .then(() => {
        return getTrails(testDb)
      })
      .then((trails) => {
        console.log(trails)
        expect(trails).toHaveLength(2)
        expect(trails[1].id).toBe(3)
      })
  })
})
